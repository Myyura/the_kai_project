---
sidebar_label: "2017年8月実施 共通問題 問題3（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Real-Analysis.Uniform-Continuity
  - Mathematics.Calculus.Taylor-Series
---

# 東北大学 大学院理学研究科 数学専攻 2017年8月実施 共通問題 問題3

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は4題ある．全問に解答すること．

以下の問いに答えよ．

(1) 関数 $f:\mathbb{R}\to\mathbb{R}$ と関数 $g:[0,\infty)\to\mathbb{R}$ を考える．

(a) $f,g$ は一様連続とする．$f\circ g$ が一様連続であることを示せ．

(b) $g$ が連続で $x\to\infty$ としたとき $g(x)$ が有限の値に収束するとする．また，$f$ は連続とする．$f\circ g$ が一様連続であることを示せ．

(2) 関数 $f:\mathbb{R}\to\mathbb{R}$ と関数 $g:[0,\infty)\to\mathbb{R}$ を次のように与える．

$$
f(x)=\begin{cases}\dfrac{1-e^{-x}}x&(x\ne0),\\1&(x=0),\end{cases}
\qquad
g(x)=x\left(x+1-\frac1{\sin\dfrac1{1+x}}\right).
$$

このとき，$f\circ g$ が一様連続であることを示せ．

### 题目描述

本卷共有4题，全部作答。

回答下列问题。

(1) 考虑函数 $f:\mathbb{R}\to\mathbb{R}$ 和 $g:[0,\infty)\to\mathbb{R}$。

(a) 若 $f,g$ 都一致连续，证明复合函数 $f\circ g$ 一致连续。

(b) 若 $g$ 连续，且当 $x\to\infty$ 时 $g(x)$ 收敛于有限值；同时 $f$ 连续，证明 $f\circ g$ 一致连续。

(2) 定义函数 $f:\mathbb{R}\to\mathbb{R}$ 和 $g:[0,\infty)\to\mathbb{R}$ 如下：

$$
f(x)=\begin{cases}\dfrac{1-e^{-x}}x&(x\ne0),\\1&(x=0),\end{cases}
\qquad
g(x)=x\left(x+1-\frac1{\sin\dfrac1{1+x}}\right).
$$

证明 $f\circ g$ 一致连续。

## **Kai**

### (1)(a)

$\varepsilon>0$ をとる．$f$ の一様連続性から，$|u-v|<\eta$ ならば $|f(u)-f(v)|<\varepsilon$ となる $\eta>0$ が存在する．$g$ の一様連続性から，$|x-y|<\delta$ ならば $|g(x)-g(y)|<\eta$ となる $\delta>0$ が存在する．これらを合わせれば

$$
|x-y|<\delta\quad\Longrightarrow\quad |f(g(x))-f(g(y))|<\varepsilon
$$

となるので，$f\circ g$ は一様連続である．

### (1)(b)

$g(x)\to\ell\in\mathbb{R}$ とおき，$h=f\circ g$ とする．$h$ は $[0,\infty)$ 上連続であり，$f$ の連続性から $h(x)\to f(\ell)$ である．

$\varepsilon>0$ に対し，$x\ge R$ ならば $|h(x)-f(\ell)|<\varepsilon/2$ となる $R>0$ をとる．コンパクト区間 $[0,R+1]$ 上で $h$ は一様連続だから，$x,y\in[0,R+1]$，$|x-y|<\delta$ ならば $|h(x)-h(y)|<\varepsilon$ となる $0<\delta\le1$ がある．

任意の $x,y\ge0$ で $|x-y|<\delta$ とする．$\min(x,y)\le R$ ならば $x,y\in[0,R+1]$ なので上の評価が使える．$\min(x,y)>R$ ならば

$$
|h(x)-h(y)|\le|h(x)-f(\ell)|+|h(y)-f(\ell)|<\varepsilon.
$$

したがって $h=f\circ g$ は $[0,\infty)$ 上一様連続である．

### (2)

$\lim_{x\to0}(1-e^{-x})/x=1$ なので，$f$ は $\mathbb{R}$ 上連続である．また $x\ge0$ では $0<1/(1+x)\le1<\pi$ より分母の正弦は正であり，$g$ は $[0,\infty)$ 上連続である．

$t=1/(1+x)$ とおくと，$x\to\infty$ のとき $t\to+0$，$x=(1-t)/t$ である．テイラー展開から

$$
\sin t=t-\frac{t^3}{6}+O(t^5),\qquad
\frac1{\sin t}=\frac1t+\frac t6+O(t^3).
$$

したがって

$$
g(x)=\frac{1-t}{t}\left(\frac1t-\frac1{\sin t}\right)
=-\frac{1-t}{6}+O(t^2)\longrightarrow-\frac16.
$$

(1)(b) より $f\circ g$ は一様連続である．

## **Reference**

- [東北大学公式問題の保存版（2018年度・共通問題，kyotsu2018(H30).pdf 第3ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2018年度 共通問題・微積分 1](https://note.com/normalmath/n/n89152917de11#3bc56cfe-6468-4b22-9a6e-4d46169c97db)
