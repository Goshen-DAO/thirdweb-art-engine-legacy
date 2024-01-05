# The thirdweb Art Engine (Legacy) [![Mentioned in Awesome thirdweb](https://awesome.re/mentioned-badge-flat.svg)](https://github.com/warengonzaga/awesome-thirdweb)

> **Note**: I'm gonna archive and close this project as I'm working on a new version of it complete from scratch using the Art Engine v2 by HashLips Labs.
>
> **Please use the new project here**. 👉 <https://github.com/warengonzaga/thirdweb-art-engine>

[![creator](https://img.shields.io/badge/by-Waren%20Gonzaga-blue.svg?longCache=true&style=flat-square)](https://github.com/warengonzaga) [![release](https://img.shields.io/github/release/warengonzaga/thirdweb-art-engine-legacy.svg?style=flat-square)](https://github.com/warengonzaga/thirdweb-art-engine-legacy/releases) [![star](https://img.shields.io/github/stars/warengonzaga/thirdweb-art-engine-legacy.svg?style=flat-square)](https://github.com/warengonzaga/thirdweb-art-engine-legacy/stargazers) [![license](https://img.shields.io/github/license/warengonzaga/thirdweb-art-engine-legacy.svg?style=flat-square)](https://github.com/warengonzaga/thirdweb-art-engine-legacy/blob/main/license)

[![repo banner](.github/img/repo_banner.jpg)](https://github.com/warengonzaga/thirdweb-art-engine-legacy)

The forked version of [HashLips Art Engine](https://github.com/HashLips/hashlips_art_engine) ([v1.1.2-patch-6](https://github.com/HashLips/hashlips_art_engine/commits/v1.1.2_patch_v6)) with better features and compatibility with [thirdweb](https://thirdweb.com).

## 🦄 Command Workflow

This is the suggested workflow for using this art engine, unless you know what you are doing. I would recommend to watch [HashLips videos](https://www.youtube.com/watch?v=OlavWoKV1Mk&list=PLvfQp12V0hS3tHI5-4olIYqH6LM8YWL63) before using this project.

1. Generate the assets.

    ```bash
    yarn build
    ```

2. Generate preview image.

    ```bash
    yarn preview
    ```

3. Generate preview GIF.

    ```bash
    yarn preview:gif
    ```

4. Upload to IPFS your images. (optional)

    ```bash
    yarn thirdweb:upload
    ```

    > **Note**: You can undo this by using `yarn meta:reset` but you can't reset it once you use the `yarn thirdweb:createbatch` command.

5. Prepare the thirdweb folder.

    ```bash
    yarn thirweb
    ```

    It will create a folder called **thirdweb** folder which you can use to upload to the thirdweb dashboard by doing drag and drop.

6. Wanna upload them by batch? I got you! (optional)

    ```bash
    yarn thirdweb:createbatch
    ```

    It will ask you how many batch of folder you want to create based on your generated assets.

    > **Warning**: This action cannot be undone once executed so be sure to backup your image assets before using this command.

## ⚡ Instant Setup

Let's get started with the instant setup and build. Proceed to the requirements below.

### 📋 Requirements

- A [GitHub Account](https://github.com/signup).
- A [Gitpod Account](https://gitpod.io). (sign up with GitHub)
- Image layers for your NFTs.

[![open in gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/warengonzaga/thirdweb-art-engine-legacy)

## 🤔 What's New

These are the few important improvements to the forked version of art engine that will work 100% with thirdweb NFT project deployments.

### ✅ New Script Command

New script command for common art engine utilities.

#### 📜 Preview GIF

Before: `$ yarn preview_gif` **Now**: `$ yarn preview:gif`

#### 📜 Update Info

Before: `$ yarn update_info` **Now**: `$ yarn meta:update`

### ✅ File and Directory Name Flattener

By executing the command yarn flattener, you can automatically transform your file and folder names into a flattened format. For instance, if the original name is bg-yellow.png, it will be changed to BG Yellow.png.

```bash
yarn flattener
```

### ✅ Upload Images to IPFS

You can now upload your generated image assets directly to IPFS and add your CID directly to your existing metadata. So all you have to do is to upload your `_metadata.json` file to the thirdweb dashboard. That's it! _(25GB Upload Limit Size)_

```bash
yarn thirdweb:upload
```

### ✅ Metadata Reset

You can now reset the metadata (specifically the `image` property) if you use the command for uploading your image assets to the IPFS.

```bash
yarn meta:reset
```

### ✅ Generate thirdweb Folder

You can now generate a folder where you can use to drag and drop it to the thirdweb dashboard. You can only run this after you generated your arts using `yarn build` or `yarn generate` command. Use the command below to generate a folder for you prepare to use in thirdweb dashboard.

```bash
yarn thirdweb
```

or

```bash
yarn thirdweb:prepare
```

If you want to generate the art and create a folder for thirdweb at the same time follow the command below.

```bash
yarn generate && yarn thirdweb
```

> **Why not add this to script command?**
> For some reason it is not working on my end, need to update this and bind it on the `yarn generate` script.
> For now, you can use the command above. ✌️

If you want to create a folder by number of batch you can use the following command below.

```bash
yarn thirdweb:createbatch
```

> **Warning**: This action cannot be undone once executed so be sure to backup your image assets before using this command.

### ✅ Start Count From

You can define your own start count upon generation. Default count is 0. This is to match the default minting token ID with thirdweb.

By default it is `0`.

```js
const startCountFrom = 0;
```

### ✅ Local File Mapping

You can define your own file mapping, you can choose between local file mapping or use the existing pre-uploaded file on IPFS. Make sure to make the `hasBaseUri` to `true` so that the engine will use the defined `baseUri` in the config file.

By default it is `false`.

```js
const hasBaseUri = false;
const baseUri = "ipfs://cid-here";
```

If set to `false` the output would be...

```json
"image": "0.png",
```

If set to `true` the output would be...

```json
"image": "ipfs://<cid-here>/0.png",
```

### ✅ Case Sensitivity

Use only this option if you want to make your layer image filename to case sensitive as trait value or case insentive and make your layer image filename to capitalize instead. By default, set to `false`.

```js
const isLayerNameFileNameAsIs = false;
```

#### Case Sensitive Example

> input: "**AWESOME**#1.png" as layer image filename.
> output: "_AWESOME_" as trait value.

#### Case Insensitive Example

> input: "**AWESOME**#1.png" as layer image filename.
> output: "_Awesome_" as trait value.

### ✅ Reset Build/Generation

Added the script command to reset the tool. It removes only the build and temp folders.

```bash
yarn reset
```

### ✅ NFT Dummy Assets

New NFT dummy assets to play with, you can use my **[NFT dummy assets here](https://github.com/warengonzaga/nft-dummy-assets)**.

## 🐛 Issues

If you're facing a problem in using The thirdweb Art Engine please let me know by [creating an issue here](https://github.com/warengonzaga/thirdweb-art-engine-legacy/issues/new) or joining the official [thirdweb discord](https://discord.gg/thirdweb) server and mention me there. I'm here to help you!

## 📋 Code of Conduct

Read the project's [code of conduct](./code_of_conduct.md).

## 📃 License

The thirdweb Art Engine (Legacy) is licensed under [The MIT License](https://opensource.org/licenses/MIT).

## 🍀 Sponsor

> Love what I do? Send me some [love](https://github.com/sponsors/warengonzaga) or [coffee](https://buymeacoff.ee/warengonzaga)!? 💖☕
>
> Can't send love or coffees? 😥 Nominate me for a **[GitHub Star](https://stars.github.com/nominate)** instead!
>
> Your support means a lot to me as it allows me to dedicate my time and energy to create and maintain open-source projects that benefits the community. Thank you for supporting my mission to make technology better, accessible and inclusive for everyone.🙏😇

## 📝 Author

The thirdweb Art Engine (Legacy) is forked and maintained by **[Waren Gonzaga](https://github.com/warengonzaga)**, with the help of awesome [contributors](https://github.com/warengonzaga/thirdweb-art-engine-legacy/graphs/contributors).

[![contributors](https://contrib.rocks/image?repo=warengonzaga/thirdweb-art-engine-legacy)](https://github.com/warengonzaga/thirdweb-art-engine-legacy/graphs/contributors)

---

💻💖☕ by [Waren Gonzaga](https://warengonzaga.com) | [He is Awesome](https://www.youtube.com/watch?v=HHrxS4diLew&t=44s) 🙏
