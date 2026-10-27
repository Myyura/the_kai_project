---
sidebar_label: "2017年8月実施 共通問題 [2]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Open-and-Closed-Sets
  - Mathematics.Topology.Continuity-and-Homeomorphisms
  - Mathematics.Topology.Hausdorff-Space
---

# 東北大学 理学研究科 数学専攻 2017年8月実施 共通問題 \[2\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#e815efd2-4b61-4029-8fd3-a5ec347676de) refined with GPT 6 Astra)

## **Description**

問題は $4$ 題ある。全問に解答すること。$\mathbb R$ は実数全体のなす集合を表す。

$(\mathbb R,\mathcal O)$ を $\mathbb R$ のユークリッド距離から定まる通常の位相 $\mathcal O$ をもつ位相空間とする。また、$\mathbb R$ の部分集合 $V$ で差集合 $\mathbb R-V$ が有限集合であるもの全体を $\mathcal Z$ とし

$$
\mathcal O_{\mathcal Z}=\mathcal Z\cup\{\varnothing\}
$$

と定義する。ここで空集合 $\varnothing$ は有限集合であると考える。

(1) $(\mathbb R,\mathcal O_{\mathcal Z})$ は位相空間であることを示せ。

(2) $f(x)=x^2$ によって定まる写像 $f:(\mathbb R,\mathcal O_{\mathcal Z})\to(\mathbb R,\mathcal O_{\mathcal Z})$ は連続であることを示せ。

(3) $f(x)=\sin x$ によって定まる写像 $f:(\mathbb R,\mathcal O_{\mathcal Z})\to(\mathbb R,\mathcal O_{\mathcal Z})$ は連続でないことを示せ。

(4) $(\mathbb R,\mathcal O_{\mathcal Z})$ から $(\mathbb R,\mathcal O)$ への連続写像は定値写像に限ることを示せ。

### 题目描述

试卷共 $4$ 道题，全部作答。$\mathbb R$ 表示实数集。

设 $(\mathbb R,\mathcal O)$ 为实数集上赋予欧几里得距离所确定的通常拓扑 $\mathcal O$ 的拓扑空间。令 $\mathcal Z$ 为所有满足差集 $\mathbb R-V$ 有限的子集 $V\subset\mathbb R$ 组成的集合族，并定义

$$
\mathcal O_{\mathcal Z}=\mathcal Z\cup\{\varnothing\}.
$$

这里认为空集 $\varnothing$ 是有限集。

(1) 证明 $(\mathbb R,\mathcal O_{\mathcal Z})$ 是拓扑空间。

(2) 证明由 $f(x)=x^2$ 定义的映射 $f:(\mathbb R,\mathcal O_{\mathcal Z})\to(\mathbb R,\mathcal O_{\mathcal Z})$ 连续。

(3) 证明由 $f(x)=\sin x$ 定义的映射 $f:(\mathbb R,\mathcal O_{\mathcal Z})\to(\mathbb R,\mathcal O_{\mathcal Z})$ 不连续。

(4) 证明从 $(\mathbb R,\mathcal O_{\mathcal Z})$ 到 $(\mathbb R,\mathcal O)$ 的连续映射只能是常值映射。

## **Kai**

### (1)

$\varnothing\in\mathcal O_{\mathcal Z}$ は定義より明らかであり、$\mathbb R\setminus\mathbb R=\varnothing$ は有限なので $\mathbb R\in\mathcal O_{\mathcal Z}$ である。

開集合族の和が空なら $\mathcal O_{\mathcal Z}$ に属する。空でなければ、その族の非空な元 $U_0$ を一つ選べる。このとき和の補集合は有限集合 $\mathbb R\setminus U_0$ の部分集合なので有限である。

有限個の共通部分について、空な元を含む場合は空集合となる。全ての元が非空なら、その共通部分の補集合は有限個の有限集合の和であり有限である。従って $\mathcal O_{\mathcal Z}$ は位相である。

### (2)

$f(x)=x^2$ とする。非空な開集合 $U=\mathbb R\setminus F$（$F$ は有限集合）に対して

$$
f^{-1}(U)=\mathbb R\setminus f^{-1}(F).
$$

各方程式 $x^2=y$ は高々二つの実解をもつので $f^{-1}(F)$ は有限集合である。空集合の逆像も空集合だから、$f$ は連続である。

### (3)

$f(x)=\sin x$ とし、開集合 $U=\mathbb R\setminus\{0\}$ を取ると

$$
f^{-1}(U)=\mathbb R\setminus\pi\mathbb Z.
$$

これは非空であり、その補集合 $\pi\mathbb Z$ は無限集合なので $\mathcal O_{\mathcal Z}$ に属さない。従って $f$ は連続ではない。

### (4)

連続写像 $f$ が異なる二つの値 $f(x)\ne f(y)$ を取ると仮定する。通常の実数直線はハウスドルフなので、$f(x),f(y)$ を含む互いに交わらない開集合 $U,V$ が存在する。連続性から $f^{-1}(U),f^{-1}(V)$ は互いに交わらない非空な余有限開集合となる。

しかし無限集合 $\mathbb R$ の二つの余有限集合は必ず交わるので矛盾する。従って $f$ は定値写像である。

## **Reference**

- [東北大学原問題の公開保存版（2018年度・共通問題、kyotsu2018(H30).pdf、PDF 2ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2018年度の解答](https://note.com/normalmath/n/n89152917de11#e815efd2-4b61-4029-8fd3-a5ec347676de)
