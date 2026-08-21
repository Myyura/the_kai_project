---
sidebar_label: "2020年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2020年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

ある電子機器は二個の電池 A, B が内蔵されており, 両方の電池が正常に動作していないとこの電子機器を使用できない。電池 A が切れるまでの時間 $T_A$ と電池 B が切れるまでの時間 $T_B$ は互いに独立で, それぞれ以下の確率密度関数

$$
f_{T_A}(t) = at \exp(-ct) \quad (t>0),
$$

$$
g_{T_B}(t) = \frac{1}{2} \exp(-bt) \quad (t>0)
$$

に従う。電池の交換は考えないものとして, 以下の問いに答えよ。なお, 指数関数の値は計算しなくて良い。

(1) 電子機器が使用不可能となるまでの時間を $S$ としたとき, $S = \min[T_A, T_B]$ で表すことができる理由を説明せよ。

(2) それぞれの電池が切れるまでの時間の平均 (単位: 年) は等しい。このとき, $a,b,c$ の値を求めよ。なお, 以降の問題はここで求めた値を使用して解答すること。

(3) 電子機器が少なくとも 2 年間は使用可能である確率を求めよ。

(4) 2 年間使用可能であった電子機器が, 次の 2 年間も使用可能である確率を求めよ。

### 题目描述

某电子设备内置两节电池 A、B，只有两节电池都正常工作时设备才能使用。电池 A、B 的耗尽时间分别记为 $T_A,T_B$，二者相互独立，且分别服从下列概率密度：

$$
f_{T_A}(t)=at\exp(-ct)\qquad(t>0),
$$

$$
g_{T_B}(t)=\frac12\exp(-bt)\qquad(t>0).
$$

不考虑更换电池，回答下列问题。指数函数的值无需计算为小数。

（1）设电子设备从开始使用到无法使用的时间为 $S$，说明为何

$$
S=\min[T_A,T_B].
$$

（2）已知两节电池耗尽时间的均值（单位：年）相等，求 $a,b,c$ 的值。后续各问均使用本问求得的参数值作答。

（3）求电子设备至少可以使用 2 年的概率。

（4）已知某台电子设备已经正常使用了 2 年，求它在接下来的 2 年中仍可继续使用的概率。

## **Kai**

(1) 電子機器が使用可能であるためには、電池 A と電池 B の両方が正常に動作している必要があります。電子機器が使用不可能になるのは、電池 A または電池 B の少なくとも一方が切れたときです。

時刻 $t$ において電子機器が使用可能であるという事象は、時刻 $t$ まで電池 A が切れておらず (すなわち $T_A > t$ )、かつ、時刻 $t$ まで電池 B も切れていない (すなわち $T_B > t$ ) という事象と同じです。これは $t < T_A$ かつ $t < T_B$ と表せ、まとめて $t < \min(T_A, T_B)$ となります。

したがって、電子機器が使用可能である時間の最大値、つまり使用不可能になるまでの時間 $S$ は、 $T_A$ と $T_B$ のうち、より短い方の時間となります。よって、 $S = \min(T_A, T_B)$ と表すことができます。

(2) まず、確率密度関数 (PDF) は、その定義域全体で積分すると 1 になるという性質を利用します。

電池 B について：
$T_B$ のPDF $g_{T_B}(t)$ の積分は、

$$
\int_0^\infty g_{T_B}(t) \, \mathrm{d}t = \int_0^\infty \frac{1}{2} \exp(-bt) \, \mathrm{d}t = 1
$$

積分を計算すると、

$$
\frac{1}{2} \left[ -\frac{1}{b} \exp(-bt) \right]_0^\infty = \frac{1}{2} \left( 0 - \left(-\frac{1}{b}\right) \right) = \frac{1}{2b}
$$

よって、 $\frac{1}{2b} = 1$ となり、 $b = \frac{1}{2}$ が得られます。

電池 A について：
同様に、 $T_A$ のPDF $f_{T_A}(t)$ の積分は、

$$
\int_0^\infty f_{T_A}(t) \, \mathrm{d}t = \int_0^\infty at \exp(-ct) \, \mathrm{d}t = 1
$$

部分積分法 ( $\int u \, \mathrm{d}v = uv - \int v \, \mathrm{d}u$ ) を用いて計算します。 $u=t, \mathrm{d}v = a\exp(-ct)\mathrm{d}t$ とおくと、 $\mathrm{d}u=\mathrm{d}t, v = -\frac{a}{c}\exp(-ct)$ となります。

$$
a \left( \left[ t \left(-\frac{1}{c} \exp(-ct)\right) \right]_0^\infty - \int_0^\infty \left(-\frac{1}{c} \exp(-ct)\right) \, \mathrm{d}t \right) = a \left( 0 + \frac{1}{c} \int_0^\infty \exp(-ct) \, \mathrm{d}t \right)
$$

$$
= \frac{a}{c} \left[ -\frac{1}{c} \exp(-ct) \right]_0^\infty = \frac{a}{c} \left( 0 - \left(-\frac{1}{c}\right) \right) = \frac{a}{c^2}
$$

よって、 $\frac{a}{c^2} = 1$ すなわち $a = c^2$ という関係式が得られます。

次に、それぞれの電池の平均寿命が等しいという条件 $E[T_A] = E[T_B]$ を用います。

$E[T_B]$ の計算：
$b=1/2$ なので、 $g_{T_B}(t) = \frac{1}{2} \exp(-\frac{t}{2})$ です。これはパラメータ $\lambda = 1/2$ の指数分布であり、その期待値は $1/\lambda$ です。

$$
E[T_B] = \frac{1}{b} = \frac{1}{1/2} = 2 \text{ (年)}
$$

$E[T_A]$ の計算：

$$
E[T_A] = \int_0^\infty t \cdot f_{T_A}(t) \, \mathrm{d}t = \int_0^\infty t(at \exp(-ct)) \, \mathrm{d}t = a \int_0^\infty t^2 \exp(-ct) \, \mathrm{d}t
$$

再度、部分積分法を用います。 $u=t^2, \mathrm{d}v = \exp(-ct)\mathrm{d}t$ とおくと、 $\mathrm{d}u=2t\mathrm{d}t, v = -\frac{1}{c}\exp(-ct)$ となります。

$$
E[T_A] = a \left( \left[ t^2 \left(-\frac{1}{c} \exp(-ct)\right) \right]_0^\infty - \int_0^\infty \left(-\frac{1}{c} \exp(-ct)\right) (2t) \, \mathrm{d}t \right) = a \left( 0 + \frac{2}{c} \int_0^\infty t \exp(-ct) \, \mathrm{d}t \right)
$$

ここで、 $\int_0^\infty t \exp(-ct) \, \mathrm{d}t = \frac{1}{a}$ であり、かつ $\frac{a}{c^2}=1$ よりこの積分の値は $\frac{1}{c^2}$ なので、

$$
E[T_A] = a \cdot \frac{2}{c} \cdot \frac{1}{c^2} = \frac{2a}{c^3}
$$

$a=c^2$ の関係を代入すると、

$$
E[T_A] = \frac{2c^2}{c^3} = \frac{2}{c}
$$

$E[T_A] = E[T_B]$ より、 $\frac{2}{c} = 2$ となり、 $c=1$ が求まります。
最後に、 $a = c^2$ より、 $a=1^2=1$ となります。

まとめ： $a=1, b=1/2, c=1$ です。

(3) 電子機器が少なくとも 2 年間使用可能である確率は $P(S \geq 2)$ です。
(1)より $S = \min(T_A, T_B)$ なので、 $S \geq 2$ は $T_A \geq 2$ かつ $T_B \geq 2$ と同値です。
$T_A$ と $T_B$ は独立なので、

$$
P(S \geq 2) = P(T_A \geq 2 \text{ and } T_B \geq 2) = P(T_A \geq 2) \times P(T_B \geq 2)
$$

それぞれの確率を計算します。(2)で求めた $a=1, b=1/2, c=1$ を用います。

$P(T_A \geq 2) = \int_2^\infty t \exp(-t) \, \mathrm{d}t$
部分積分法 ( $u=t, \mathrm{d}v=\exp(-t)\mathrm{d}t$ ) を用いると、

$$
= [-t \exp(-t)]_2^\infty - \int_2^\infty -\exp(-t) \, \mathrm{d}t = (0 - (-2e^{-2})) + [-\exp(-t)]_2^\infty = 2e^{-2} + (0 - (-e^{-2})) = 3e^{-2}
$$

$P(T_B \geq 2) = \int_2^\infty \frac{1}{2} \exp(-t/2) \, \mathrm{d}t$

$$
= [-\exp(-t/2)]_2^\infty = 0 - (-\exp(-2/2)) = \exp(-1) = e^{-1}
$$

よって、求める確率は、

$$
P(S \geq 2) = (3e^{-2}) \times (e^{-1}) = 3e^{-3}
$$

(4) 2年間使用可能であったという条件の下で、次の2年間も使用可能である確率は、条件付き確率 $P(S \geq 4 | S \geq 2)$ で表されます。
条件付き確率の定義より、

$$
P(S \geq 4 | S \geq 2) = \frac{P(S \geq 4 \text{ and } S \geq 2)}{P(S \geq 2)} = \frac{P(S \geq 4)}{P(S \geq 2)}
$$

分母 $P(S \geq 2)$ は(3)で $3e^{-3}$ と計算済みです。
分子 $P(S \geq 4)$ を(3)と同様に計算します。

$$
P(S \geq 4) = P(T_A \geq 4) \times P(T_B \geq 4)
$$

$P(T_A \geq 4) = \int_4^\infty t \exp(-t) \, \mathrm{d}t$

$$
= [-t \exp(-t)]_4^\infty + \int_4^\infty \exp(-t) \, \mathrm{d}t = (0 - (-4e^{-4})) + [-\exp(-t)]_4^\infty = 4e^{-4} + e^{-4} = 5e^{-4}
$$

$P(T_B \geq 4) = \int_4^\infty \frac{1}{2} \exp(-t/2) \, \mathrm{d}t$

$$
= [-\exp(-t/2)]_4^\infty = 0 - (-\exp(-4/2)) = \exp(-2) = e^{-2}
$$

よって、 $P(S \geq 4) = (5e^{-4}) \times (e^{-2}) = 5e^{-6}$ となります。

したがって、求める条件付き確率は、

$$
P(S \geq 4 | S \geq 2) = \frac{5e^{-6}}{3e^{-3}} = \frac{5}{3}e^{-3}
$$
