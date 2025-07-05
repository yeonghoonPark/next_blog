"use client";

import { useCallback, useEffect, useRef } from "react";

import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { ReactTyped } from "react-typed";

import { CarouselArrowButton } from "@/app/components";
import { useCarouselArrowButton, useCarouselDotButton } from "@/app/hooks";
import { restrictToRange } from "@/app/utils";
import { Post } from "@/contentlayer/generated";

type Props = {
  posts: Post[];
};

const CAROUSEL_OPTIONS: EmblaOptionsType = { loop: true };
const TWEEN_FACTOR_BASE = 0.84;

const PostsCarousel = ({ posts }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(CAROUSEL_OPTIONS);
  const {
    onPrevButtonClick, //
    onNextButtonClick,
    prevButtonDisabled,
    nextButtonDisabled,
  } = useCarouselArrowButton(emblaApi);
  const {
    onDotButtonClick, //
    scrollSnaps,
    selectedIndex,
  } = useCarouselDotButton(emblaApi);
  const tweenFactor = useRef(0);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = restrictToRange(tweenValue, 0, 1).toString();
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);

    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  return (
    <div className="relative flex flex-col gap-6 mb-10 select-none">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex ml-[calc(2rem*-1)] touch-pan-y touch-pinch-zoom">
          {posts.map((post, index) => (
            <div
              className="flex-[0_0_80%] pl-8 min-w-0 translate-x-0 translate-y-0 transform"
              key={post.title}
            >
              <Link
                className={
                  index === selectedIndex ? "cursor-pointer" : "cursor-default"
                }
                href={
                  index === selectedIndex
                    ? `/posts/${post._raw.flattenedPath}`
                    : "/"
                }
              >
                <div className="flex flex-col justify-center items-center gap-8 bg-gradient-to-br from-sky-300 dark:from-yellow-400 to-purple-600 dark:to-rose-500 rounded-md rounded-ss-3xl rounded-ee-3xl h-52">
                  <ReactTyped
                    backDelay={10000}
                    backSpeed={50}
                    className="font-semibold text-slate-100 dark:text-slate-950 md:text-2xl lg:text-4xl"
                    loop={index === selectedIndex}
                    strings={[post.title]}
                    typeSpeed={50}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-8">
        <CarouselArrowButton
          direction="prev"
          disabled={prevButtonDisabled}
          onClick={onPrevButtonClick}
        />
        <CarouselArrowButton
          direction="next"
          disabled={nextButtonDisabled}
          onClick={onNextButtonClick}
        />
      </div>

      <div className="right-0 bottom-2 absolute flex items-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            className={`${index === selectedIndex ? "border-slate-500 dark:border-slate-300" : "border-slate-300 dark:border-slate-500"}
              border-2 bg-transparent appearance-none touch-manipulation inline-flex cursor-pointer w-3 h-3 justify-center items-center rounded-full`}
            key={index}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsCarousel;
