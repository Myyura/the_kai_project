---
sidebar_label: "2021年8月実施 数2 [3]"
tags:
  - Nagoya-University
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Integration
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2021年8月実施 数2 [3]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2021/11/340fb55945f15626c7a3a89358d8992d.pdf)


$t$ を時間変数として、次の問に答えよ。

1) 関数 $h(t)$ の導関数 $h'(t)$ と $f(x)$ は連続とする。次が成り立つことを示せ。

$$
\frac{d}{dt} \int_0^{h(t)} f(x) dx = h'(t) f(h(t))
$$

2) $D(t)$ は時間とともに変動する2次元有界領域とする (下図の網掛け領域)。 $D(t)$ の変動速度を表すベクトル場を $D'(t) = V$ とする。 $D(t)$ の境界 $\partial D(t)$ は滑らかで、その外向き法線を $n$ とする。一方、 $f(x)$ は2次元空間上で定義された任意の有界連続な関数で、 $D(t)$ の変動による影響を受けないものとする。このとき、次の空欄に入る式を示せ。

$$
\frac{d}{dt} \int_{D(t)} f(x) dS = \int_{\partial D(t)} \boxed{\text{空欄}}\, ds
$$

ただし、 $dS$ と $ds$ はそれぞれ微小面積と微小長さを表す。

![移動する領域と境界の法線・変位の模式図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya_university/informatics/complex/2022/nagoya-complex2022-moving-domain.svg)

### 题目描述

以 $t$ 表示时间变量，回答下列问题。

1. 设 $h'(t)$ 与 $f(x)$ 连续，证明

   $$
   \frac{d}{dt}\int_0^{h(t)}f(x)\,dx
   =h'(t)f(h(t));
   $$

2. 设 $D(t)$ 是随时间变化的二维有界区域，即原题下图中的阴影区域；其变化速度由向量场 $D'(t)=V$ 表示。边界 $\partial D(t)$ 光滑，外法向量为 $\boldsymbol n$。函数 $f(\boldsymbol x)$ 是定义在二维空间上的任意有界连续函数，且不随区域 $D(t)$ 的变化而改变。求出并证明下式空格中应填的被积函数

   $$
   \frac{d}{dt}\int_{D(t)}f(\boldsymbol x)\,dS
   =
   \int_{\partial D(t)}
   \boxed{\text{空格}}\,ds,
   $$

   其中 $dS,ds$ 分别表示面积微元与长度微元。

## **Kai**

1) Let $F(x)$ be the antiderivative of $f(x)$ , i.e., $F'(x) = f(x)$ . Then

$$
\int_0^{h(t)} f(x) dx = F(h(t)) - F(0)
$$

Taking the derivative with respect to $t$ , we have

$$
\frac{d}{dt} \int_0^{h(t)} f(x) dx = \frac{d}{dt} [F(h(t)) - F(0)] = F'(h(t)) h'(t) - 0 = f(h(t)) h'(t) = h'(t) f(h(t))
$$

Thus,

$$
\frac{d}{dt} \int_0^{h(t)} f(x) dx = h'(t) f(h(t))
$$

2) Let $n$ denote the outward unit normal. By Reynolds transport theorem, we have

$$
\frac{d}{dt} \int_{D(t)} f(x) dS = \int_{D(t)} \frac{\partial f}{\partial t} dS + \int_{\partial D(t)} f(x)(V \cdot n) ds
$$

Since $f(x)$ does not depend on the change of $D(t)$ , $\frac{\partial f}{\partial t} = 0$ . Then

$$
\frac{d}{dt} \int_{D(t)} f(x) dS = \int_{\partial D(t)} f(x)(V \cdot n) ds
$$

Therefore, the expression in the blank is $f(x)(V \cdot n)$ .
