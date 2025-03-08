import { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

type UseCarouselArrowButton = {
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
  prevButtonDisabled: boolean;
  nextButtonDisabled: boolean;
};

export const useCarouselArrowButton = (
  emblaApi: EmblaCarouselType | undefined,
): UseCarouselArrowButton => {
  const [prevButtonDisabled, setPrevBtnDisabled] = useState(true);
  const [nextButtonDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    onPrevButtonClick,
    onNextButtonClick,
    prevButtonDisabled,
    nextButtonDisabled,
  };
};
