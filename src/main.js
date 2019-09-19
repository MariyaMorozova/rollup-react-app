import {version} from '../package.json';
import _ from 'lodash';

export default function () {
    console.log(
        _.join([5, 6], ', ')
    );
    console.log('version ' + version);
}