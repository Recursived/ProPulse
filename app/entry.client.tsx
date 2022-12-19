import {CacheProvider} from "@emotion/react";
import {RemixBrowser} from "@remix-run/react";
import {startTransition, StrictMode, useState} from "react";
import {hydrateRoot} from "react-dom/client";
import {ClientStyleContext} from "./utils/styling/context";
import createEmotionCache, {defaultCache} from "./utils/styling/createEmotionCache";


interface ClientCacheProviderProps {
	children: React.ReactNode;
}

function ClientCacheProvider({children}: ClientCacheProviderProps) {
	const [cache, setCache] = useState(defaultCache)

	function reset() {
		setCache(createEmotionCache())
	}

	return (
		<ClientStyleContext.Provider value={{reset}}>
			<CacheProvider value={cache}>{children}</CacheProvider>
		</ClientStyleContext.Provider>
	)
}

function hydrate() {
	startTransition(() => {
		hydrateRoot(
			document,
			<ClientCacheProvider>
				<RemixBrowser />
			</ClientCacheProvider>
		);
	});
}

if (window.requestIdleCallback) {
	window.requestIdleCallback(hydrate);
} else {
	// Safari doesn't support requestIdleCallback
	// https://caniuse.com/requestidlecallback
	window.setTimeout(hydrate, 1);
}
