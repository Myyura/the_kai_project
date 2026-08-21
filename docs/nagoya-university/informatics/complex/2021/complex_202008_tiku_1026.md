---
sidebar_label: "2020年8月実施 微积分"
tags:
  - Nagoya-University
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Integration
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2020年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$t$ を時間変数として、次の問に答えよ。

1) 関数 $h(t)$ の導関数 $h'(t)$ と $f(x)$ は連続とする。次が成り立つことを示せ。

$$
\frac{d}{dt} \int_0^{h(t)} f(x) dx = h'(t) f(h(t))
$$

2) $D(t)$ は時間とともに変動する2次元有界領域とする (下図の網掛け領域)。 $D(t)$ の変動速度を表すベクトル場を $D'(t) = V$ とする。 $D(t)$ の境界 $\partial D(t)$ は滑らかで、その外向き法線を $n$ とする。一方、 $f(x)$ は2次元空間上で定義された任意の有界連続な関数で、 $D(t)$ の変動による影響を受けないものとする。このとき、次の空欄に入る式を示せ。

$$
\frac{d}{dt} \int_{D(t)} f(x) dS = \int_{\partial D(t)} f(x)(V \cdot n) ds
$$

ただし、 $dS$ と $ds$ はそれぞれ微小面積と微小長さを表す。

### 题目描述

以 $t$ 表示时间变量，回答下列问题。

1. 设 $h'(t)$ 与 $f(x)$ 连续，证明

   $$
   \frac{d}{dt}\int_0^{h(t)}f(x)\,dx
   =h'(t)f(h(t));
   $$

2. 设 $D(t)$ 是随时间变化的二维有界区域，即原题下图中的阴影区域；其变化速度由向量场 $D'(t)=V$ 表示。边界 $\partial D(t)$ 光滑，外法向量为 $\boldsymbol n$。函数 $f(\boldsymbol x)$ 是定义在二维空间上的任意有界连续函数，且不随区域 $D(t)$ 的变化而改变。证明原题空格中应填入的关系

   $$
   \frac{d}{dt}\int_{D(t)}f(\boldsymbol x)\,dS
   =
   \int_{\partial D(t)}
   f(\boldsymbol x)(V\mathbin{\cdot}\boldsymbol n)\,ds,
   $$

   其中 $dS,ds$ 分别表示面积微元与长度微元。

当前 Markdown 未附原题所称的阴影区域图，但上述文字已给出证明所需的区域、边界、速度场和法向量条件。

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

2) By Reynolds transport theorem, we have

$$
\frac{d}{dt} \int_{D(t)} f(x) dS = \int_{D(t)} \frac{\partial f}{\partial t} dS + \int_{\partial D(t)} f(x)(V \cdot n) ds
$$

Since $f(x)$ does not depend on the change of $D(t)$ , $\frac{\partial f}{\partial t} = 0$ . Then

$$
\frac{d}{dt} \int_{D(t)} f(x) dS = \int_{\partial D(t)} f(x)(V \cdot n) ds
$$

Therefore, the expression in the blank is $f(x)(V \cdot n)$ .
