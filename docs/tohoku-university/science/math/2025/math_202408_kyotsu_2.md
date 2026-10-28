---
sidebar_label: "2024年8月実施 共通問題 [2]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Hausdorff-Space
  - Mathematics.Topology.Continuity-and-Homeomorphisms
---

# 東北大学 理学研究科 数学専攻 2024年8月実施 共通問題 \[2\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#fd55ec77-1d63-4834-8c58-f0e5593ca849) refined with GPT 6 Astra)

## **Description**

$\mathbb R$ のユークリッド位相の開集合系を $\mathcal O_{\mathbb R}$ とおく。閉区間 $I=[0,1]$ の部分集合族 $\mathcal W$ と $\mathcal W'$ をそれぞれ

$$
\mathcal W=\{V\in\mathcal O_{\mathbb R}\mid V\subset(0,1)\},\qquad
\mathcal W'=\{V\cup\{0,1\}\mid V\in\mathcal W\}
$$

とおき、$I$ の部分集合族 $\mathcal O$ を $\mathcal O=\mathcal W\cup\mathcal W'$ とおく。以下の問いに答えよ。

(1) $(I,\mathcal O)$ は位相空間となることを示せ。

(2) 位相空間 $(I,\mathcal O)$ はハウスドルフ空間であるかどうか、理由とともに答えよ。

(3) 写像 $f:(I,\mathcal O)\to(I,\mathcal O)$、$f(x)=-4x^2+4x$ は連続写像であるかどうか、理由とともに答えよ。

(4) 写像 $g:(I,\mathcal O)\to(I,\mathcal O)$、$g(x)=x^2$ は連続写像であるかどうか、理由とともに答えよ。

### 题目描述

设 $\mathcal O_{\mathbb R}$ 为 $\mathbb R$ 的欧几里得拓扑的开集族。对闭区间 $I=[0,1]$，定义其子集族

$$
\mathcal W=\{V\in\mathcal O_{\mathbb R}\mid V\subset(0,1)\},\qquad
\mathcal W'=\{V\cup\{0,1\}\mid V\in\mathcal W\},
$$

并令 $\mathcal O=\mathcal W\cup\mathcal W'$。回答下列问题。

(1) 证明 $(I,\mathcal O)$ 是拓扑空间。

(2) 判断 $(I,\mathcal O)$ 是否为豪斯多夫空间，并说明理由。

(3) 判断映射 $f:(I,\mathcal O)\to(I,\mathcal O)$、$f(x)=-4x^2+4x$ 是否连续，并说明理由。

(4) 判断映射 $g:(I,\mathcal O)\to(I,\mathcal O)$、$g(x)=x^2$ 是否连续，并说明理由。

## **Kai**

### (1)

$E=\{0,1\}$ とおく。$\mathcal W$ は $(0,1)$ の通常の開集合全体であるから、任意の和と有限個の共通部分で閉じている。$\mathcal O$ の各元は一意的に

$$
V\quad\text{または}\quad V\cup E\qquad(V\in\mathcal W)
$$

と書ける。$\varnothing\in\mathcal W$、$I=(0,1)\cup E\in\mathcal W'$ である。

任意の和は、内部部分の和に、少なくとも一つの集合が $E$ を含めば $E$ を加えた集合となるので $\mathcal O$ に属する。有限個の共通部分も、内部部分の共通部分に、全ての集合が $E$ を含む場合だけ $E$ を加えた集合となるので $\mathcal O$ に属する。よって $\mathcal O$ は $I$ 上の位相である。

### (2)

ハウスドルフではない。$0$ を含む開集合は必ず $1$ も含むので、異なる二点 $0,1$ を互いに交わらない開近傍で分離できない。

### (3)

連続ではない。$E=\varnothing\cup E\in\mathcal W'$ は開集合であるが、

$$
f^{-1}(E)=\left\{0,\frac12,1\right\}.
$$

この集合の $(0,1)$ との共通部分 $\{1/2\}$ は通常の開集合でないので、$f^{-1}(E)\notin\mathcal O$ である。

### (4)

連続である。$V\in\mathcal W$ に対して、$g(x)=x^2$ は通常の位相で連続であり、$g^{-1}(V)\subset(0,1)$ なので $g^{-1}(V)\in\mathcal W$ である。また

$$
g^{-1}(V\cup E)=g^{-1}(V)\cup E\in\mathcal W'.
$$

したがって $\mathcal O$ の任意の開集合の逆像は開集合である。

## **Reference**

- [東北大学公式問題（2025年度・共通問題、PDF 2ページ）](https://www.math.tohoku.ac.jp/exam/questions/2025_R7_kyotsu.pdf#page=2)
- [L^2：2025年度の解答](https://note.com/normalmath/n/n89152917de11#fd55ec77-1d63-4834-8c58-f0e5593ca849)
