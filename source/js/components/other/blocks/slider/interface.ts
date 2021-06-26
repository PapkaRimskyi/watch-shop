import { FC, Ref } from 'react';

import IAdditionalProductsDataModel from '../../../main/main/catalog-page/products-of-section/additional-products/data/interface';

export interface ISliderComponent {
  sliderRef: Ref<HTMLUListElement>,
  blockedArrow: null | 'left' | 'right',
  onClickHandler: (e: React.MouseEvent) => void,
  onTouchEndHandler: () => void,
}

export interface IAdditionalProductsSlider extends ISliderComponent {
  data: IAdditionalProductsDataModel[],
}

export interface IProductCardSlider extends ISliderComponent {
  data: string[],
}

export interface ISlider {
  data: string[] | IAdditionalProductsDataModel[],
  SliderComponent: FC<IProductCardSlider | IAdditionalProductsSlider>,
}
