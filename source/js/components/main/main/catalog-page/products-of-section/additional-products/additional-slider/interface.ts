import IAdditionalProductsDataModel from '../data/interface';

import { ISliderComponent } from '../../../../../../other/blocks/slider/interface';

export default interface IAdditionalProductsSlider extends ISliderComponent {
  data: IAdditionalProductsDataModel[],
}
