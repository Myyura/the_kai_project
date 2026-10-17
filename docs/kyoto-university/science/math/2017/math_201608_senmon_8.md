---
sidebar_label: "2016年8月実施 専門科目 [8]（周期的な4階拡散方程式）"
tags:
  - Kyoto-University
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Mathematics.Functional-Analysis.Uniform-Convergence
---

# 京都大学 理学研究科 数学・数理解析専攻 2016年8月実施 専門科目 問題8

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$C^\infty$ 級関数 $u:\mathbb R\times[0,\infty)\to\mathbb R$ は偏微分方程式

$$
\frac{\partial u}{\partial t}(x,t)+\frac{\partial^4u}{\partial x^4}(x,t)=t\sin x,
\quad (x,t)\in\mathbb R\times[0,\infty)
$$

および周期境界条件

$$
u(x+2\pi,t)=u(x,t),\quad (x,t)\in\mathbb R\times[0,\infty)
$$

を満たすとする。このとき，$t\to\infty$ で $u(x,t)/t$ はある関数 $g(x)$ に $\mathbb R$ 上で一様収束することを示し，その関数 $g(x)$ を求めよ。

#### 题目描述

假设 $C^\infty$ 函数 $u:\mathbb R\times[0,\infty)\to\mathbb R$ 满足偏微分方程

$$
\frac{\partial u}{\partial t}(x,t)+\frac{\partial^4u}{\partial x^4}(x,t)=t\sin x,
\quad (x,t)\in\mathbb R\times[0,\infty)
$$

及周期边界条件

$$
u(x+2\pi,t)=u(x,t),\quad (x,t)\in\mathbb R\times[0,\infty).
$$

证明当 $t\to\infty$ 时，$u(x,t)/t$ 在 $\mathbb R$ 上一致收敛于某函数 $g(x)$，并求该函数。

## **Kai**

$p(x,t)=(t-1)\sin x$ とおけば $p_t+p_{xxxx}=t\sin x$ である。したがって $v=u-p$ は $v_t+v_{xxxx}=0$ を満たす。

$v(x,0)$ の Fourier 係数を $c_k$ とする。初期値は滑らかな周期関数なので、2回の部分積分により $c_k=O(|k|^{-2})$、したがって $\sum_{k\in\mathbb Z}|c_k|<\infty$ である。方程式を Fourier 変換すると各係数は

$$
\frac{d}{dt}\widehat v_k(t)=-k^4\widehat v_k(t),\qquad
\widehat v_k(t)=c_ke^{-k^4t}
$$

を満たす。よって

$$
\begin{gathered}
v(x,t)=\sum_{k\in\mathbb Z}c_ke^{-k^4t}e^{ikx},\\
\sup_{x\in\mathbb R,\ t\ge0}|v(x,t)|\le\sum_{k\in\mathbb Z}|c_k|.
\end{gathered}
$$

ゆえに $t>0$ について

$$
\sup_{x\in\mathbb R}\left|\frac{u(x,t)}t-\sin x\right|
\le\frac{1+\sum_k|c_k|}{t}\longrightarrow0.
$$

したがって $\boxed{g(x)=\sin x}$ である。

## **Reference**

- [京都大学公式問題（2017年度・専門科目、PDF 5ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2016math_senmon.pdf)
- [照合用参考解答（2017年度・専門科目 問題8、PDF 6–8ページ）](https://drive.google.com/file/d/1xnUh9xGXnMMcRus6tdwrh0cB_C3JNoi6/view)
