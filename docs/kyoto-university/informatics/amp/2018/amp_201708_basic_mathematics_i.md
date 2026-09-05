---
sidebar_label: "2017年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Limit
---
# 京都大学 情報学研究科 数理工学専攻 2017年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/pukiwiki/amptest-e/index.php?file=h30_exam.pdf&pcmd=open&plugin=attach&refer=Entrance+Examination+Information)

以下の問いに答えよ。

(i) 三角関数 $\tan x, \cot x$ についての加法公式

$$
\frac{1}{2} \tan x = \frac{1}{2} \cot x - \cot 2x
$$

を用いて $\frac{1}{2^k} \tan \frac{x}{2^k}$ の無限和と $\cot x$ に関する等式

$$
\sum_{k=1}^{\infty} \frac{1}{2^k} \tan \frac{x}{2^k} = \frac{1}{x} - \cot x
$$

を示せ。

(ii) 双曲線関数 $\tanh x, \coth x$ についての加法公式を与えよ。さらにこれを利用して、 $\frac{1}{2^k} \tanh \frac{x}{2^k}$ の無限和と $\coth x$ に関する等式を導出せよ。ただし、これらの双曲線関数は、実数 $x$ について

$$
\tanh x = \frac{\sinh x}{\cosh x}, \quad \coth x = \frac{\cosh x}{\sinh x}, \quad \sinh x = \frac{e^x - e^{-x}}{2}, \quad \cosh x = \frac{e^x + e^{-x}}{2}
$$

によって定義される。

### 题目描述

回答下列问题。

1. 使用三角函数 $\tan x$、$\cot x$ 的倍角关系

$$
\frac12\tan x
=
\frac12\cot x-\cot 2x,
$$

证明在各项均有定义的情形下，

$$
\sum_{k=1}^{\infty}
\frac{1}{2^k}\tan\frac{x}{2^k}
=
\frac1x-\cot x.
$$

2. 先写出双曲函数 $\tanh x$、$\coth x$ 的相应倍角关系，再利用它推导
   $\frac{1}{2^k}\tanh\frac{x}{2^k}$ 的无穷级数与
   $\coth x$ 之间的等式。这里对实数 $x$ 定义

$$
\tanh x=\frac{\sinh x}{\cosh x},
\qquad
\coth x=\frac{\cosh x}{\sinh x},
$$

$$
\sinh x=\frac{e^x-e^{-x}}2,
\qquad
\cosh x=\frac{e^x+e^{-x}}2.
$$

## **Kai**

### (i)

与えられた公式で $x$ を $x/2^k$ に置き換え、両辺に $2^{-(k-1)}$ を掛けると、

$$
\frac{1}{2^k}\tan\frac{x}{2^k}
=
\frac{1}{2^k}\cot\frac{x}{2^k}
-\frac{1}{2^{k-1}}\cot\frac{x}{2^{k-1}}
$$

となる。 $k=1,\ldots,n$ について和をとれば、中間項が消去され、

$$
\sum_{k=1}^n\frac{1}{2^k}\tan\frac{x}{2^k}
=\frac{1}{2^n}\cot\frac{x}{2^n}-\cot x
$$

を得る。ここで

$$
\frac{1}{2^n}\cot\frac{x}{2^n}
=
\frac{\cos(x/2^n)}
{x\,\dfrac{\sin(x/2^n)}{x/2^n}}
\longrightarrow\frac1x
$$

なので、各項が定義される $x\neq 0$ に対して

$$
\boxed{
\sum_{k=1}^{\infty}\frac{1}{2^k}\tan\frac{x}{2^k}
=\frac1x-\cot x}
$$

となる。

### (ii)

双曲線関数の倍角公式から、

$$
\begin{aligned}
\coth 2x
&=\frac{\cosh^2x+\sinh^2x}{2\sinh x\cosh x}\\
&=\frac12\coth x+\frac12\tanh x
\end{aligned}
$$

である。したがって、求める加法公式は

$$
\boxed{
\frac12\tanh x
=\coth 2x-\frac12\coth x}
$$

である。

この式で $x$ を $x/2^k$ に置き換え、両辺に $2^{-(k-1)}$ を掛けると、

$$
\frac{1}{2^k}\tanh\frac{x}{2^k}
=
\frac{1}{2^{k-1}}\coth\frac{x}{2^{k-1}}
-\frac{1}{2^k}\coth\frac{x}{2^k}
$$

となる。部分和は

$$
\sum_{k=1}^n\frac{1}{2^k}\tanh\frac{x}{2^k}
=\coth x-\frac{1}{2^n}\coth\frac{x}{2^n}
$$

である。また、

$$
\frac{1}{2^n}\coth\frac{x}{2^n}
=
\frac{\cosh(x/2^n)}
{x\,\dfrac{\sinh(x/2^n)}{x/2^n}}
\longrightarrow\frac1x
$$

だから、 $x\neq 0$ に対して

$$
\boxed{
\sum_{k=1}^{\infty}\frac{1}{2^k}\tanh\frac{x}{2^k}
=\coth x-\frac1x}
$$

を得る。
