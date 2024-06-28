## 0.0.1-alpha.24 "@tutorialkit/astro" (2024-06-28)


### Bug Fixes

* **dev:** do not optimize components in development ([#28](https://github.com/AriPerkkio/tutorialkit/issues/28)) ([1aded2a](https://github.com/AriPerkkio/tutorialkit/commit/1aded2aef21f6821de743260b7efe5d5b788cb5f))
* ignore platform specific files ([#69](https://github.com/AriPerkkio/tutorialkit/issues/69)) ([186e2db](https://github.com/AriPerkkio/tutorialkit/commit/186e2dba86b529fcc5816861e689edf128f520e2))
* **logo:** support multiple formats and remove styling requirements ([#62](https://github.com/AriPerkkio/tutorialkit/issues/62)) ([79cb18d](https://github.com/AriPerkkio/tutorialkit/commit/79cb18dca4e6b80a1f12ec96e1e627678f7b377d))
* make sure vite-plugin-inspect is only included in dev mode ([#39](https://github.com/AriPerkkio/tutorialkit/issues/39)) ([efeed8f](https://github.com/AriPerkkio/tutorialkit/commit/efeed8ff1c603228b58e9b583fe5304c4480a509))
* send lesson updates as a single mount and preview fixes ([#32](https://github.com/AriPerkkio/tutorialkit/issues/32)) ([272e4a3](https://github.com/AriPerkkio/tutorialkit/commit/272e4a3171735334347dd8144913fd952c3e9ff5))
* some change ([fe93fb9](https://github.com/AriPerkkio/tutorialkit/commit/fe93fb9bae5c58e5d30be40832a39a184eb99dda))
* sort navigation items numerically in `objectToSortedArray` function ([#56](https://github.com/AriPerkkio/tutorialkit/issues/56)) ([e45f62b](https://github.com/AriPerkkio/tutorialkit/commit/e45f62b68952228dd1facd55c2db5bd9f5247e42))
* support a base different from / in astro config ([#92](https://github.com/AriPerkkio/tutorialkit/issues/92)) ([3e7830b](https://github.com/AriPerkkio/tutorialkit/commit/3e7830be7ed1fda9598c569eaad9878aa9d10156))
* support inheritance for `editor`/`focus` and fix bug with logo ([#67](https://github.com/AriPerkkio/tutorialkit/issues/67)) ([a7eb31d](https://github.com/AriPerkkio/tutorialkit/commit/a7eb31dcaa039292870a78fae979efd6c0ece134))
* **terminal:** change behaviour of terminal configuration ([#44](https://github.com/AriPerkkio/tutorialkit/issues/44)) ([2cd9fec](https://github.com/AriPerkkio/tutorialkit/commit/2cd9fecacae10f473f9c000375861e2f59539d41))
* **terminal:** fix selection background in light mode ([#45](https://github.com/AriPerkkio/tutorialkit/issues/45)) ([55de9ed](https://github.com/AriPerkkio/tutorialkit/commit/55de9ed94616caa489750839f2ec65505089d766))
* **theme:** set correct background and text color for panels ([#94](https://github.com/AriPerkkio/tutorialkit/issues/94)) ([3ad01a0](https://github.com/AriPerkkio/tutorialkit/commit/3ad01a0cc1055c1f1ffd7b220785f4be1d8d0669))
* **theme:** use correct tokens for the breadcrumbs ([#88](https://github.com/AriPerkkio/tutorialkit/issues/88)) ([1669299](https://github.com/AriPerkkio/tutorialkit/commit/1669299c988b8680dda4360e8f02d64c601ad48d))
* use part title instead of slug for page title ([#40](https://github.com/AriPerkkio/tutorialkit/issues/40)) ([dc11ccc](https://github.com/AriPerkkio/tutorialkit/commit/dc11cccde48af65715bac9ab23be0ff3ead3649c))


### Features

* add eslint ([#90](https://github.com/AriPerkkio/tutorialkit/issues/90)) ([fcfb3e8](https://github.com/AriPerkkio/tutorialkit/commit/fcfb3e8109b5be1ef59ac2bfd8efd4db8e635e34))
* allow custom components that modify the tutorial state ([#64](https://github.com/AriPerkkio/tutorialkit/issues/64)) ([1279917](https://github.com/AriPerkkio/tutorialkit/commit/1279917be042580033f23605e92f903ecd186e19))
* allow ordering to be config based in addition to folder based ([#79](https://github.com/AriPerkkio/tutorialkit/issues/79)) ([2b131e5](https://github.com/AriPerkkio/tutorialkit/commit/2b131e597b94671678c2f2e4625e194eb382dab0))
* folder rework, introduce `@tutorialkit/components-react` ([#17](https://github.com/AriPerkkio/tutorialkit/issues/17)) ([dd74c49](https://github.com/AriPerkkio/tutorialkit/commit/dd74c49ec4f021ac53fd320cf5023275fbf12311))
* hot reload for files in webcontainer ([#61](https://github.com/AriPerkkio/tutorialkit/issues/61)) ([949fcf3](https://github.com/AriPerkkio/tutorialkit/commit/949fcf3438e3bf17902d753089372fbc03911136))
* load user provided css for theme customization ([#31](https://github.com/AriPerkkio/tutorialkit/issues/31)) ([4e8452a](https://github.com/AriPerkkio/tutorialkit/commit/4e8452a3b3142bc9f4cbd56261bc6cdb8573a8e1))
* make the logo link configurable ([#68](https://github.com/AriPerkkio/tutorialkit/issues/68)) ([2da64ae](https://github.com/AriPerkkio/tutorialkit/commit/2da64ae811cbb12aeab8fd1fb36bed4845542aa4))
* **markdown:** add ability to load file for code blocks ([#18](https://github.com/AriPerkkio/tutorialkit/issues/18)) ([9b57454](https://github.com/AriPerkkio/tutorialkit/commit/9b57454eb46dee76949f67c5c31edf1103f7110c))
* **previews:** allow hiding the previews entirely ([#41](https://github.com/AriPerkkio/tutorialkit/issues/41)) ([84ecef5](https://github.com/AriPerkkio/tutorialkit/commit/84ecef5aecacba37873977fbb19ef64d65d10c14))
* simplify astro config ([#20](https://github.com/AriPerkkio/tutorialkit/issues/20)) ([b2b2bfb](https://github.com/AriPerkkio/tutorialkit/commit/b2b2bfbfd224657d114a537a96064d55bd069b91))
* template inheritance ([#99](https://github.com/AriPerkkio/tutorialkit/issues/99)) ([c4350a8](https://github.com/AriPerkkio/tutorialkit/commit/c4350a8032d0d24ac9250be8b81869ddae88a538))
* **terminal:** add support for terminals ([#33](https://github.com/AriPerkkio/tutorialkit/issues/33)) ([53c902b](https://github.com/AriPerkkio/tutorialkit/commit/53c902bcdc30f3c39f9b2a737e6da1dabd09dabf))
* **terminal:** allow styling terminal with css tokens ([#34](https://github.com/AriPerkkio/tutorialkit/issues/34)) ([80ccfe7](https://github.com/AriPerkkio/tutorialkit/commit/80ccfe75eff511583de8d1155652714a65edc1ed))
* **theme:** add support for setting text and code colors in callouts ([#96](https://github.com/AriPerkkio/tutorialkit/issues/96)) ([623b04d](https://github.com/AriPerkkio/tutorialkit/commit/623b04da18e5545a6d29b03a60571b1fb5bc2db1))
* **theme:** create proper tokens for callouts ([#87](https://github.com/AriPerkkio/tutorialkit/issues/87)) ([6d01620](https://github.com/AriPerkkio/tutorialkit/commit/6d01620f65c2386d98864246f8fe87e53c76c78f))



## [0.0.1-alpha.23](https://github.com/stackblitz/tutorialkit/compare/0.0.1-alpha.22...0.0.1-alpha.23) "@tutorialkit/astro" (2024-06-19)


### Bug Fixes

* ignore platform specific files ([#69](https://github.com/stackblitz/tutorialkit/issues/69)) ([186e2db](https://github.com/stackblitz/tutorialkit/commit/186e2dba86b529fcc5816861e689edf128f520e2))
* **logo:** support multiple formats and remove styling requirements ([#62](https://github.com/stackblitz/tutorialkit/issues/62)) ([79cb18d](https://github.com/stackblitz/tutorialkit/commit/79cb18dca4e6b80a1f12ec96e1e627678f7b377d))
* sort navigation items numerically in `objectToSortedArray` function ([#56](https://github.com/stackblitz/tutorialkit/issues/56)) ([e45f62b](https://github.com/stackblitz/tutorialkit/commit/e45f62b68952228dd1facd55c2db5bd9f5247e42))
* support inheritance for `editor`/`focus` and fix bug with logo ([#67](https://github.com/stackblitz/tutorialkit/issues/67)) ([a7eb31d](https://github.com/stackblitz/tutorialkit/commit/a7eb31dcaa039292870a78fae979efd6c0ece134))


### Features

* allow custom components that modify the tutorial state ([#64](https://github.com/stackblitz/tutorialkit/issues/64)) ([1279917](https://github.com/stackblitz/tutorialkit/commit/1279917be042580033f23605e92f903ecd186e19))
* hot reload for files in webcontainer ([#61](https://github.com/stackblitz/tutorialkit/issues/61)) ([949fcf3](https://github.com/stackblitz/tutorialkit/commit/949fcf3438e3bf17902d753089372fbc03911136))



