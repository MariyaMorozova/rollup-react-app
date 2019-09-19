import {version} from '../package.json';
import _ from 'lodash';

export default () => {
    console.log(
        _.join([5, 6], ', ')
    );
    console.log('version ' + version);
}