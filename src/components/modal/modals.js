import * as MT from '../../constants/modal/modalTypes';

import InfoModal from './InfoModal/InfoModal';
import LoadingModal from './LoadingModal/LoadingModal';

export default {
  [MT.LOADING_MODAL]: LoadingModal,
  [MT.INFO_MODAL]: InfoModal,
};
