import { get } from '@ember/object';
import { helper as buildHelper } from '@ember/component/helper';

export default buildHelper(function([leftSide, rightSide, path]) {
  if (path) {
    return get(leftSide, path) === rightSide;
  } else {
    return leftSide === rightSide;
  }
});
