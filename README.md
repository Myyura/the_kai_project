# The Kai Project
```text
"Answer to the Ultimate Question of Life, the Universe, and Everything"
```

本项目旨在提供一个开源的、便捷的、分享与讨论修考试题答案的地方，破除信息之壁。

## How to contribute
我们期待你的Input, 倘若你熟悉Git, 可以通过直接为本项目提交PR的方式添砖加瓦, 倘若你不熟悉, 亦可将想要分享的试题\答案通过邮件的方式发送给我们, 我们第一时间将其提交到本项目之上。

* email: 376672994@qq.com
* QQ群: 925154731

我们并不追求解答的完整性, 但如果你发现了现有解答中的错误, 请积极指出。

### 样例说明
以`東京大学 大学院 情報理工学研究科 2022年度 数学 第3問`的问题与解答为例, 对文件存放路径, 内容格式进行讲解。

#### 存放路径说明
其对应的文件置于

`docs/kakomonn/tokyo_university/IST/kyotsu_2023_math_3.md`

下, 路径的基本命名规则为

`docs/kakomonn/学校名/研究科或学部名/专攻名_入学年份_问题类别(可选)_问题编号.md`

**注：对于较长或缩写辨识度较高的专攻名我们这里使用简写, 其他的一般使用全称。**

目前项目基于[mkdocs](https://www.mkdocs.org/)构建而成, 因此在创建好文件之后, 我们还需要修改根目录下的mkdocs.yml使得文件能够被正常索引。相信大家在见到该文件中的nav字段后便能够理解。

#### 内容格式说明
以`docs/kakomonn/tokyo_university/IST/kyotsu_2023_math_3.md`为例 (为了方便讲解, 部分细节做了删减)

```markdown
---
comments: false
description: 東京大学 大学院 情報理工学研究科 2022年度 数学 第3問
keywords: Tokyo-University, 2022
---

## Source
東京大学 大学院 情報理工学研究科 2022年度 数学 第3問

## Description
$xy$平面上に、$0<x<1$かつ$0<y<1$で定義される領域$R$を考える．$R$上にランダムに1点を選び、それを点$A$とする．ただし,点$A$は$R$上に一様に分布するとする．図に表すように,点$A$から$y$軸への垂線を$AB$,点$A$から$x$軸への垂線を$AC$とする．原点を$O$としたとき、長方形$OCAB$を$\lceil$点$A$の長方形$\rfloor$と呼ぶ．また、点$A$の長方形の面積を表す確率変数を$S$とする．以下の問いに答えよ．

(1)、$S$の期待値を求めよ．

(2)、$S\leq r$となる確率を求めよ．ただし$0<r<1$とする．

(3)、$S$の確率密度関数を求めよ．

再び、領域$R$を考える．$n$を正の整数とする．$R$上にランダムに$n$点を選び,それらを点$A_{1},A_{2},...,A_{n}$とする．ただし、各点は$R$上に一様に分布し、$i\neq j$である$A_{i}$と$A_{j}$は独立に選ばれるとする．次の問いに答えよ．

(4)、点$A_{i}$の長方形の面積を表す確率変数を$S_{i}$とする．$Z$を$S_{1},S_{2},...,S_{n}$の最小値を表す確率変数とする．この時、$Z$の確率密度関数を求めよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/kyotsu_2022_math_3_p1.png" width="300" height="300" alt=""/>
</figure>

## Kai
確率を $P$ ，期待値を $E$ で表す。

### (1)
A の座標を $(X,Y)$ とすると、 $X,Y$ は互いに独立な確率変数であり、
それぞれ $0$ から $1$ までの一様分布に従う。
よって、求める期待値は、

$$
\begin{align}
E(S)
&= E(XY)
\\
&= E(X)E(Y)
\\
&= \frac{1}{4}
\end{align}
$$

### (2)
求める確率は、

$$
\begin{align}
P(S \leq r)
&= r + \int_r^1 \frac{r}{x} dx
\\
&= r + r \left[ \log x \right]_r^1
\\
&= r - r \log r
\end{align}
$$

### (3)
$S$ の確率密度関数 $f(s)$ は、 $0 \lt s \lt 1$ では

$$
\begin{align}
f(s)
&= \frac{d}{ds} P(S \leq s)
\\
&= - \log s
\end{align}
$$

であり、それ以外では $0$ である。

### (4)
$0 \lt z \lt 1$ について

$$
\begin{align}
P(Z \leq z)
&= 1 - P(Z \gt z)
\\
&= 1 - P(S_1 \gt z \text{ and } S_2 \gt z \text{ and } \cdots
\text{ and } S_n \gt z )
\\
&= 1 - P(S_1 \gt z) P(S_2 \gt z) \cdots P(S_n \gt z)
\\
&= 1 - \left( 1 - z + z \log z \right)^n
\end{align}
$$

よって、求める確率密度関数 $g(z)$ は、

$$
\begin{align}
g(z)
&= \frac{d}{dz} P(Z \leq z)
\\
&= -n \log z \left( 1 - z + z \log z \right)^{n-1}
\end{align}
$$

である。
また、 $z \lt 0, \ z \gt 1$ では $g(z)=0$ である。
```

其主要分为三个部分

- Header: 即最上方配置本篇解答的简要描述, 关键词的地方。可不填写。
- Source: 问题与答案来源的描述, 通常需要写明该问题为哪所学校哪个研究科哪个专攻哪一年的哪一题。需要的话, 也可以写上提供者本人的ID。
- Description: 问题描述, 也即题目描述本身。日语或英语均可, 当然倘若能够二者均提供自然是最好的。
- Kai: 问题解答, 问题解答中的子标题与问题描述中问题序号一一对应, 若问题描述中问题需要为(1), (2), ..., 则问题解答中子标题亦为(1), (2), ...,

倘若需要插入图片, 可以先将图片上传至本仓库专门用于存放资产的仓库[the_kai_project_assets](https://github.com/Myyura/the_kai_project_assets), 然后仿照示例中的写法, 通过插入html的方式显示图片。

```html
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/kyotsu_2022_math_3_p1.png" width="300" height="300" alt=""/>
</figure>
```

其中src字段填写图片的路径, width与height为图片显示大小, alt为图片标题

需要注意的是其中图片的路径, 由于Github对于图片资源处理上的原因, 原始图片路径为

- https://github.com/Myyura/the_kai_project_assets/blob/main/kakomonn/tokyo_university/IST/kyotsu_2022_math_3_p1.png

而嵌入时需要将路径更改为

- https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/kyotsu_2022_math_3_p1.png

当然, 如果你使用其他图床则参考对应图床的使用方法即可。
