# 1. 【2ステップ】HTML要素の位置を指定する方法
要素の位置を指定ときは、以下の3段階を踏みます。
1. HTML要素を用意する
2. `position`でモードを選択
3. `top`,　`right`,　`bottom`,　`left`で位置を指定する

以下で、それぞれ解説します。

#### 1. HTML要素を用意する

**コード**
```html:index.html
<div class="box">This is box!</div>
```

**結果**
CSSが何も適用されていない裸のHTML要素です。
![](https://storage.googleapis.com/zenn-user-upload/49b658413e81-20240702.png)

#### 2. `position`でモードを選択
モードによって、`top`,　`right`,　`bottom`,　`left`の適用の仕方が変わります。

**コード**
以下の5つのモードから、1つだけ選びます。
```css:style.css
.box {
    position: static;
    position: relative;
    position: absolute;
    position: fixed;
    position: sticky;
}
```

#### 簡単なまとめ
|選ぶ値|使い方|注意点|
|---|---|---|
|`static`|本来あるべき場所に留まります。|`top`,　`right`,　`bottom`,　`left`を書いても適用されません。|
|`relative`|本来あるべき場所から移動します。|`top`と`bottom`は、どちらかしか書けません。`right`か`left`は、どちらかしか書けません。|
|`absolute`|親要素かHTML要素を基準に|
|`fixed`|パソコンの画面を基準に決められます。|
|`sticky`|パソコンの画面を基準に決められます。|

**結果**
位置を指定するモードを決めただけなので、何も変化はありません。
![](https://storage.googleapis.com/zenn-user-upload/49b658413e81-20240702.png)

#### 3. `top`,　`right`,　`bottom`,　`left`で位置を指定する
`top`,　`right`,　`bottom`,　`left`とその数値を記述することで、「**どの方向に**、**どれだけ**移動するか」を設定できます。

**コード**
```css:style.css
.box {
    position: relative;
    top: 50px;
    left: 100px;
}
```

なぜこのように動くかは後で話します。とにかく、`top`や`left`というプロパティによって`<div class="box">This is box!</div>`というHTML要素が動いた、ということだけ理解してもらえたらOKです！

**結果**
![](https://storage.googleapis.com/zenn-user-upload/cda7a2233932-20240702.png)

# 2. `position:`の後にくる値は5種類!
`position:`の後にくる値は、`static` `relative` `absolute` `fixed` `sticky`の五つ。これらは、実は綺麗に分類することができる。それは、下のような図にまとめることができる。
まず、以下のように
## `position: static;`の時
特に何も指定されない。ページの通常フローに従って位置付けられる。
## `position: relative;`の時
本来あるべき場所(`position: static;`の時にある場所)から`top:`, `right:`, `bottom:`, `left:`で設定した値通りに移動した場所になる。
* Other content will not be adjusted to fit into any gap left by the element.
# 3. 「ある他の長方形」基準
## ユーザの画面基準`position: fixed;` `position: sticky;`
画面に固定された位置になる。
A fixed element does not leave a gap in the page where it would normally have been located.
## 一つ上の祖先要素基準`position: absolute;`
Notice the fixed element in the lower-right corner of the page. Here is the CSS that is used