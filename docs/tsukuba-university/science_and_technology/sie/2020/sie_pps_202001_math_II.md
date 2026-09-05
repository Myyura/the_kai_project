---
sidebar_label: "社会工学学位プログラム 2020年1月実施 数学 II"
tags:
  - Tsukuba-University
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Integration
---
# 筑波大学 システム情報工学研究群 社会工学学位プログラム・サービス工学学位プログラム 共通 2020年1月実施 数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の (1)-(3) に答えよ.

(1) 実関数 $f(x)$ 及び $g(x)$ を以下のように定める.

$x>0$ の場合:

$$
f(x) = \frac{\exp(\sqrt{x}) - 1 - \sqrt{x}}{x}, \quad g(x) = \frac{\exp(\sqrt{x}) - 1 - \sqrt{x} - x/2}{x^{3/2}}
$$

$x=0$ の場合:

$$
f(0) = C_1, \quad g(0) = C_2.
$$

$x$ を任意の実数としたとき、以下をそれぞれ求めよ。

(i) $x$ が $0$ に近づくときの $f(x)$ 及び $g(x)$ の右側極限值.

(ii) $f(x)$ と $g(x)$ が $x=0$ において右連続であるための $C_1$ 及び $C_2$ の値.

(実関数 $h(x)$ に対して、 $x$ が $a$ に近づくときの右側極限値は $\lim_{x \to a+0} h(x)$ , $\lim_{x \to a^+} h(x)$ 等と表記される。)

(2) (i) 実関数 $h(x)$ について、実数 $a$ における微分の定義を書け、また、微分の意味,及び、社会問題への微分の応用について150字以内で説明せよ。

(ii) 次の極限を微分の形に直し、その値を求めよ.

$$
\lim_{x \to 0} \frac{\cos(x^{20}) - 1}{x}
$$

(3) (i) 次の関数のグラフを描け.

$$
f(x) = x \exp(-x). \quad (x \geq 0)
$$

(ii) 次の広義積分を計算せよ.

$$
\int_0^{\infty} x \exp(-x) dx.
$$

(iii) $n$ を任意の自然数としたとき、次の広義積分を計算せよ.

$$
\int_0^{\infty} x^n \exp(-x) dx.
$$

### 题目描述

完成以下三题。

1. 对 $x>0$，定义

   $$
   f(x)=\frac{e^{\sqrt x}-1-\sqrt x}{x},\qquad
   g(x)=\frac{e^{\sqrt x}-1-\sqrt x-x/2}{x^{3/2}},
   $$

   并在 $x=0$ 时令

   $$
   f(0)=C_1,\qquad g(0)=C_2.
   $$

   以下问题均在 $x\geq0$ 的定义域内讨论，只涉及从右侧趋近 $0$：

   1. 分别求 $\displaystyle\lim_{x\to0^+}f(x)$ 与 $\displaystyle\lim_{x\to0^+}g(x)$；
   2. 求使 $f,g$ 在 $x=0$ 处右连续的 $C_1,C_2$。

   题面同时说明，函数 $h$ 在 $a$ 处的右极限可写作 $\lim_{x\to a+0}h(x)$ 或 $\lim_{x\to a^+}h(x)$。
2. 回答以下问题：

   1. 写出实函数 $h(x)$ 在实数 $a$ 处导数的定义，并在 150 字以内说明微分的含义及其在社会问题中的应用。
   2. 将下列极限改写为导数形式并求值：

      $$
      \lim_{x\to0}\frac{\cos(x^{20})-1}{x}.
      $$

3. 回答以下问题：

   1. 画出函数

      $$
      f(x)=xe^{-x}\qquad(x\geq0)
      $$

      的图像。
   2. 计算广义积分

      $$
      \int_0^\infty xe^{-x}\,dx.
      $$

   3. 对任意自然数 $n$，计算

      $$
      \int_0^\infty x^ne^{-x}\,dx.
      $$

## **Kai**

(1)

(i)

$$
f(x)=\frac{e^{\sqrt{x}}-1-\sqrt{x}}{x}
$$

とおく． $t=\sqrt{x}$ とおけば $x=t^2$ であり，
$x\to 0^+$ のとき $t\to 0^+$ となる．よって，

$$
\lim_{x\to 0^+} f(x)
= \lim_{t\to 0^+} \frac{e^t-1-t}{t^2}
$$

である．ここでロピタルの定理を用いると，

$$
\lim_{t\to0^+}\frac{e^t-1-t}{t^2}
= \lim_{t\to0^+}\frac{e^t-1}{2t}
$$

が成り立つので，

$$
\lim_{x\to 0^+} f(x)
= \lim_{t\to 0^+} \frac{e^t}{2}
= \frac{1}{2}
$$

を得る．

次に，

$$
g(x)
= \frac{e^{\sqrt{x}}-1-\sqrt{x}-\frac{x}{2}}{x^{3/2}}
$$

とおく．同様に $t=\sqrt{x}$ とすると，

$$
g(x)
= \frac{e^t-1-t-\frac{t^2}{2}}{t^3}
$$

である．したがって，

$$
\lim_{x\to 0^+} g(x)
= \lim_{t\to 0^+} \frac{e^t-1-t-\frac{t^2}{2}}{t^3}
$$

となる．ここでロピタルの定理を用いると，

$$
\lim_{t\to0^+}\frac{e^t-1-t-\frac{t^2}{2}}{t^3}
= \lim_{t\to0^+}\frac{e^t-1-t}{3t^2}
$$

より，

$$
\lim_{x\to 0^+} g(x)
= \lim_{t\to 0^+} \frac{e^t-1}{6t}
= \lim_{t\to 0^+} \frac{e^t}{6}
= \frac{1}{6}
$$

である．

(ii)
$f(x)$ および $g(x)$ が $x=0$ において右連続となるためには，

$$
f(0)=\lim_{x\to 0^+} f(x),\qquad
g(0)=\lim_{x\to 0^+} g(x)
$$

が必要である．よって，

$$
f(0)=C_1=\frac{1}{2},\qquad
g(0)=C_2=\frac{1}{6}
$$

と定めればよい．

(2)

(i)
関数 $h(x)$ の $x=a$ における微分係数の定義は，

$$
h'(a)
= \lim_{x\to a} \frac{h(x)-h(a)}{x-a}
$$

であり， $\Delta x=x-a$ とおくと，

$$
h'(a)
= \lim_{\Delta x\to 0}
\frac{h(a+\Delta x)-h(a)}{\Delta x}
$$

と書ける．

微分は瞬間変化率およびグラフの接線の傾きを表す．社会問題では，人口・価格・感染者数などの時間変化を測り，増減の予測や政策効果の比較に用いられる．

(ii)
極限

$$
\lim_{x\to 0} \frac{\cos(x^{20})-1}{x}
$$

を考える． $u=x^{20}$ とおくと，
$x\to 0$ のとき $u\to 0$ である．したがって，

$$
\frac{\cos(x^{20})-1}{x}
= \frac{\cos u-\cos 0}{u}\,x^{19}
$$

と変形できる．ここで，

$$
\left.\frac{d}{du}\cos u\right|_{u=0}
= -\sin 0
= 0
$$

であるから，

$$
\lim_{x\to 0} \frac{\cos(x^{20})-1}{x}
= 0
$$

となる．

また，ロピタルの定理を用いると，

$$
\lim_{x\to 0} \frac{\cos(x^{20})-1}{x}
= \lim_{x\to 0}
\frac{-\sin(x^{20})\cdot 20x^{19}}{1}
= 0
$$

と求めることもできる．

(3)

(i)
$x\ge 0$ において

$$
f(x)=x e^{-x}
$$

とする．このとき，

$$
f'(x)
= e^{-x}-x e^{-x}
= (1-x)e^{-x}
$$

であり，
$f'(x)=0$ となるのは $x=1$ のときである．

$$
f(1)=e^{-1}=\frac{1}{e}
$$

である．

さらに，

$$
f''(x)
= -e^{-x}-(1-x)e^{-x}
= (x-2)e^{-x}
$$

より，
$f''(x)=0$ となるのは $x=2$ であり，

$$
f(2)=2e^{-2}
$$

である．以上より， $f(x)$ は
$x=0$ から $x=1$ まで増加し，
その後 $x\to\infty$ で $0$ に収束する．

![Graph of f](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tsukuba_university/science_and_technology/sie/2020/tsukuba-202001-exp-linear.svg)

(ii)

$$
\int_0^{\infty} x e^{-x}\,dx
$$

を部分積分すると，

$$
\int_0^{\infty} x e^{-x}\,dx
= \left[-x e^{-x}\right]_0^{\infty}
+ \int_0^{\infty} e^{-x}\,dx
$$

となる．ここで，

$$
\left[-x e^{-x}\right]_0^{\infty}=0
$$

であるから，

$$
\int_0^{\infty} x e^{-x}\,dx
= \left[-e^{-x}\right]_0^{\infty}
= 1
$$

を得る．

(iii)
一般に，

$$
\int_0^{\infty} x^n e^{-x}\,dx
$$

を部分積分すると，

$$
\int_0^{\infty} x^n e^{-x}\,dx
= \left[-x^n e^{-x}\right]_0^{\infty}
+ \int_0^{\infty} n x^{n-1} e^{-x}\,dx
$$

である．ここで

$$
I_n=\int_0^{\infty} x^n e^{-x}\,dx
$$

とおくと，

$$
I_n=n I_{n-1}
$$

が成り立つ．また，

$$
I_0=\int_0^{\infty} e^{-x}\,dx=1
$$

より，

$$
I_n=n! I_0=n!
$$

を得る．
