export default function (key) {
	const data = useNuxtApp().payload.data[key] || useNuxtApp().payload.data[key];

	if (!data)
		return;

	return data;
}