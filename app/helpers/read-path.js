import { get } from '@ember/object';
import { helper as buildHelper } from '@ember/component/helper';

export default buildHelper(function([object, path]){
  if (path) {
    return get(object, path);
  } else {
    return object;
  }
});
