---
sidebar_label: 2012年8月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Riemann-Sum
  - Mathematics.Calculus.Mean-Value-Theorem
  - Mathematics.Calculus.Taylor-Series
---
# 京都大学 情報学研究科 システム科学専攻 2012年8月実施 数学【II】

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

$e$ を自然対数の底とする。

### 問1
$n$ は自然数とする。

(i) 定積分を用いて $\displaystyle\lim_{n\to\infty}\sum_{i=1}^n\frac1{n+i}$ を求めよ。

(ii) $|x|\le1/2$ において $|\log(1+x)-x|\le x^2$ を示せ。

(iii) (i),(ii) を用いて $\displaystyle\lim_{n\to\infty}\prod_{i=1}^n\frac{2(n+i)-1}{2(n+i)}$ を求めよ。

### 問2
$f$ は $(0,\infty)$ で微分可能とする。

(i) $g(x)=xf(\log x)$ を考えることにより、$0<a<b$ に対して

$$
\frac{e^bf(b)-e^af(a)}{e^b-e^a}=f(c)+f'(c)
$$

を満たす $c\in(a,b)$ が存在することを示せ。

(ii) $\lim_{x\to\infty}[f(x)+f'(x)]=0$ なら $\lim_{x\to\infty}f(x)=0$ であることを示せ。

(iii) $h$ は $C^3$ 級とする。$h+h'+h''+h^{(3)}\to0$ であるが $h\to0$ ではない例を示せ。

#### 题目描述

**问1** 设 $n$ 为自然数。(i) 用定积分求 $\lim_{n\to\infty}\sum_{i=1}^n1/(n+i)$。(ii) 证明 $|x|\le1/2$ 时 $|\log(1+x)-x|\le x^2$。(iii) 利用前两问求 $\lim_{n\to\infty}\prod_{i=1}^n[2(n+i)-1]/[2(n+i)]$。

**问2** 设 $f$ 在 $(0,\infty)$ 可微。(i) 通过 $g(x)=xf(\log x)$，证明对 $0<a<b$ 存在 $c\in(a,b)$ 使 $(e^bf(b)-e^af(a))/(e^b-e^a)=f(c)+f'(c)$。(ii) 证明若 $f+f'\to0$，则 $f\to0$。(iii) 举一个 $C^3$ 函数 $h$，使 $h+h'+h''+h^{(3)}\to0$，但 $h$ 不趋于零。$e$ 为自然对数的底。

## **Kai**

### 問1
(i) リーマン和より

$$
\sum_{i=1}^n\frac1{n+i}=\frac1n\sum_{i=1}^n\frac1{1+i/n}
\longrightarrow\int_0^1\frac{dt}{1+t}=\boxed{\log2}.
$$

(ii) $|t|\le1/2$ では $1/(1+t)\le2$ なので

$$
|\log(1+x)-x|=\left|\int_0^x\frac{-t}{1+t}dt\right|
\le2\int_0^{|x|}s\,ds=x^2.
$$

(iii) 積を $P_n$ とおく。(ii) より

$$
\left|\log P_n+\frac12\sum_{i=1}^n\frac1{n+i}\right|
\le\frac14\sum_{i=1}^n\frac1{(n+i)^2}\le\frac1{4n}\to0.
$$

従って $\log P_n\to-\frac12\log2$ であり、$\boxed{P_n\to1/\sqrt2}$。

### 問2
(i) $g'(x)=f(\log x)+f'(\log x)$。$[e^a,e^b]$ 上の平均値の定理により、$g'(\xi)=[e^bf(b)-e^af(a)]/(e^b-e^a)$ となる $\xi\in(e^a,e^b)$ が存在する。$c=\log\xi$ とすればよい。

(ii) 任意の $\varepsilon>0$ に対し、$x\ge a$ で $|f(x)+f'(x)|<\varepsilon$ となる $a>0$ を固定する。(i) より任意の $b>a$ に対して

$$
|f(b)|\le e^{a-b}|f(a)|+(1-e^{a-b})\varepsilon.
$$

$b\to\infty$ として $\limsup|f(b)|\le\varepsilon$。$\varepsilon$ は任意なので $\boxed{f(b)\to0}$。

(iii) $\boxed{h(x)=\sin x}$ とすれば $h+h'+h''+h^{(3)}=0$ だが、$h$ は零に収束しない。

