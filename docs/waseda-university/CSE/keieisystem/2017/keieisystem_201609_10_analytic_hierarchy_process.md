---
sidebar_label: "2016年9月実施 計画数理学 問題10"
tags:
  - Waseda-University
  - Operations-Research.Decision-Analysis.Analytic-Hierarchy-Process
  - Operations-Research.Decision-Analysis.Pairwise-Comparison-Consistency
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2016年9月実施 計画数理学 問題10

## **Author**
祭音Myyura

## **Description**

夕食の店を代替案 A、B、C から選ぶ。評価基準は P、Q、R の3つであり、一対比較による階層的意思決定法 (AHP) を用いる。

基準のウェイト比は $P:Q:R=4:2:1$、各基準における代替案のウェイト比は

$$
\begin{aligned}
P &: A:B:C=2:3:1,\\
Q &: A:B:C=2:1:4,\\
R &: A:B:C=4:1:1
\end{aligned}
$$

である。

1. パレート最適を例を用いて説明せよ。
2. 最良の代替案を計算せよ。
3. 理想的な一対比較行列に対する幾何平均法の妥当性を説明せよ。
4. 一対比較の整合性を検討する重要性を、整合しない具体例により説明せよ。

## **Kai**

### [小問 1]

ある代替案がパレート最適であるとは、少なくとも1つの評価基準を悪化させずには、他の基準を改善できないことをいう。言い換えると、その代替案を全基準で同等以上、かつ少なくとも1基準で厳密に上回る別の代替案が存在しないことである。

例えば、店Aが「価格は安いが味は普通」、店Bが「価格は高いが味は良い」なら、どちらも他方を一方的には支配せず、ともにパレート最適となり得る。一方、店Cが店Aより高く、味も劣るなら、店Cは店Aに支配されるためパレート最適ではない。

### [小問 2]

基準の正規化ウェイトは

$$
(w_P,w_Q,w_R)
=\left(\frac47,\frac27,\frac17\right).
$$

各基準の下での局所ウェイトは

$$
\begin{array}{c|ccc}
&A&B&C\\ \hline
P&1/3&1/2&1/6\\
Q&2/7&1/7&4/7\\
R&2/3&1/6&1/6
\end{array}.
$$

したがって総合ウェイトは

$$
\begin{aligned}
W_A
&=\frac47\frac13+\frac27\frac27+\frac17\frac23
=\frac{18}{49}
=\frac{108}{294}
\approx0.3673,\\
W_B
&=\frac47\frac12+\frac27\frac17+\frac17\frac16
=\frac{103}{294}
\approx0.3503,\\
W_C
&=\frac47\frac16+\frac27\frac47+\frac17\frac16
=\frac{83}{294}
\approx0.2823.
\end{aligned}
$$

よって

$$
W_A>W_B>W_C
$$

であり、最良の代替案は

$$
\boxed{\mathrm{A}}
$$

である。

### [小問 3]

絶対ウェイトを $w_X,w_Y,w_Z>0$ とし、$\sum_iw_i=1$ とする。理想的な一対比較行列では各要素が

$$
a_{ij}=\frac{w_i}{w_j}
$$

となる。第 $i$ 行の幾何平均は

$$
\begin{aligned}
g_i
&=\left(\prod_{j=1}^{3}\frac{w_i}{w_j}\right)^{1/3}\\
&=\frac{w_i}{(w_Xw_Yw_Z)^{1/3}}.
\end{aligned}
$$

全行に共通する分母を用いて正規化すると

$$
\frac{g_i}{g_X+g_Y+g_Z}
=\frac{w_i}{w_X+w_Y+w_Z}
=w_i.
$$

したがって、幾何平均法は理想的に整合した一対比較行列から元の絶対ウェイトを正確に復元する。

### [小問 4]

例えば

$$
X\text{ は }Y\text{ の4倍重要},\qquad
Y\text{ は }Z\text{ の3倍重要}
$$

と判断したなら、推移性から $X$ は $Z$ の12倍重要であるべきである。ところが同時に「$Z$ は $X$ の2倍重要」と判断すると、

$$
A=
\begin{pmatrix}
1&4&1/2\\
1/4&1&3\\
2&1/3&1
\end{pmatrix}
$$

となり、$a_{XY}a_{YZ}=12\neq a_{XZ}=1/2$ である。このような循環的判断から得られるウェイトは質問の順序や計算法に敏感で、意思決定の根拠として信頼できない。

そこで最大固有値を用いる整合度

$$
\mathrm{CI}=\frac{\lambda_{\max}-n}{n-1}
$$

や整合比 $\mathrm{CR}$ を確認し、値が大きければ一対比較を見直す必要がある。
