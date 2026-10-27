---
sidebar_label: "2018年8月実施 選択問題 [5]（ルベーグ積分）"
tags:
  - Tohoku-University
  - Mathematics.Real-Analysis.Approximate-Identities-and-Mollifiers
---

# 東北大学 理学研究科 数学専攻 2018年8月実施 選択問題 \[5\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は8題ある。3題を選択して解答すること。

$\mathbb R$ 上の関数列 $\{f_n\}_{n=1}^\infty$ を

$$
f_n(x)=\frac{n}{\pi(n^2x^2+1)}\qquad(x\in\mathbb R,\ n=1,2,\ldots)
$$

で定義する。$m$ は $\mathbb R$ 上のルベーグ測度として、以下の問いに答えよ。

(1) 各 $n=1,2,\ldots$ に対して

$$
\int_{-\infty}^{\infty}f_n(x)dm(x)
$$

の値を求めよ。ただし、非負の関数に関しては、$\mathbb R$ 上で広義リーマン積分可能ならばルベーグ積分可能であり、双方の意味での積分の値は一致するという事実は使用してよい。

(2) $\mathbb R$ 上の有界な実数値ルベーグ可測関数 $g(x)$ が $x=0$ で連続であるとする。このとき

$$
\lim_{n\to\infty}\int_{-\infty}^{\infty}f_n(x)g(x)dm(x)=g(0)
$$

を証明せよ。

(3) $\mathbb R$ 上の有界な実数値ルベーグ可測関数 $g(x)$ の $x=0$ での左極限 $\lim_{\substack{x<0\\x\to0}}g(x)$ と右極限 $\lim_{\substack{x>0\\x\to0}}g(x)$ がそれぞれ存在すると仮定する。

$$
a=\lim_{\substack{x<0\\x\to0}}g(x),\qquad b=\lim_{\substack{x>0\\x\to0}}g(x)
$$

とおくとき、

$$
\lim_{n\to\infty}\int_{-\infty}^{\infty}f_n(x)g(x)dm(x)
$$

の値を $a,b$ を用いて表せ。

### 题目描述

试卷共8题，选择其中3题作答。

在 $\mathbb R$ 上定义函数列 $\{f_n\}_{n=1}^\infty$：

$$
f_n(x)=\frac{n}{\pi(n^2x^2+1)}\qquad(x\in\mathbb R,\ n=1,2,\ldots).
$$

设 $m$ 为 $\mathbb R$ 上的勒贝格测度，回答下列问题。

(1) 对每个 $n=1,2,\ldots$，求

$$
\int_{-\infty}^{\infty}f_n(x)dm(x).
$$

可以使用如下事实：非负函数若在 $\mathbb R$ 上广义黎曼可积，则它勒贝格可积，且两种积分的值相同。

(2) 设 $g$ 为 $\mathbb R$ 上的有界实值勒贝格可测函数，且在 $x=0$ 处连续。证明

$$
\lim_{n\to\infty}\int_{-\infty}^{\infty}f_n(x)g(x)dm(x)=g(0).
$$

(3) 设 $g$ 为 $\mathbb R$ 上的有界实值勒贝格可测函数，且在 $x=0$ 处的左右极限均存在。令

$$
a=\lim_{x\uparrow0}g(x),\qquad b=\lim_{x\downarrow0}g(x).
$$

用 $a,b$ 表示极限 $\displaystyle\lim_{n\to\infty}\int_{-\infty}^{\infty}f_n(x)g(x)dm(x)$。

## **Kai**

### (1)

$u=nx$ と変数変換すると、

$$
\int_{\mathbb R}f_n\,dm
=\frac1\pi\int_{-\infty}^{\infty}\frac{du}{1+u^2}
=\frac1\pi\left[\arctan u\right]_{-\infty}^{\infty}=1.
$$

### (2)

$M=\sup_{x\in\mathbb R}|g(x)|<\infty$ とする。$g$ の $0$ における連続性から、任意の $\varepsilon>0$ に対し $|x|<\delta$ ならば $|g(x)-g(0)|<\varepsilon$ となる $\delta>0$ が存在する。(1) より、

$$
\left|\int_{\mathbb R}f_ng\,dm-g(0)\right|
\le\varepsilon+2M\int_{|x|\ge\delta}f_n(x)\,dx.
$$

ここで

$$
\int_{|x|\ge\delta}f_n(x)\,dx
=1-\frac2\pi\arctan(n\delta)\longrightarrow0.
$$

よって上極限は $\varepsilon$ 以下となり、$\varepsilon$ の任意性から極限は $g(0)$ である。

### (3)

$f_n$ は偶関数なので $\int_0^\infty f_n\,dm=\int_{-\infty}^0f_n\,dm=1/2$ である。$g(0+)=b$ と (2) と同じ近傍・尾部の分割から

$$
\int_0^\infty f_n(x)(g(x)-b)\,dx\longrightarrow0.
$$

同様に $g(0-)=a$ を用いれば、

$$
\int_{-\infty}^0 f_n(x)(g(x)-a)\,dx\longrightarrow0.
$$

両者を加えると、求める極限は $(a+b)/2$ となる。

## **Reference**

- [東北大学 2019年度・選択問題の公開保存資料（sentaku2019(H31).pdf、PDF 5ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2019年度・ルベーグ積分の答案](https://note.com/normalmath/n/n89152917de11#88b0e72e-e946-4b0e-9094-97cb129ba3c3)
