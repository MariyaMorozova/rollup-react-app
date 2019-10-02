import * as _ from "lodash";
import {version} from '../package.json';

export default () => {
    console.log(
        _.join([5, 6], ', ')
    );
    console.log('version ' + version);
}