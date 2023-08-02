import { flare } from "@flareapp/flare-client";
import { flareVue } from "@flareapp/flare-vue";
import Vue from 'vue';

export default ({ $config: { flareKey } }: { $config: { flareKey: string }}) => {
	flare.light(flareKey);

	Vue.use(flareVue);
}
