---
sidebar_label: "2017年7月実施 計画数理学 問題10"
tags:
  - Waseda-University
  - Operations-Research.Decision-Analysis.Analytic-Hierarchy-Process
  - Operations-Research.Decision-Analysis.Sensitivity-Analysis
  - Operations-Research.Decision-Analysis.Pairwise-Comparison-Consistency
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2017年7月実施 計画数理学 問題10

## **Author**
祭音Myyura

## **Description**

AHP により休暇先 A、B、C を、評価基準 P、Q、R から選ぶ。基準のウェイトは

$$
(w_P,w_Q,w_R)=(0.5,0.3,0.2)
$$

であり、各基準のもとでの代替案ウェイトは

$$
\begin{array}{c|ccc}
&A&B&C\\ \hline
P&0.2&0.4&0.4\\
Q&0.3&0.2&0.5\\
R&0.5&0.3&0.2
\end{array}
$$

である。

1. 最良の休暇先を求めよ。
2. $w_P/w_Q=0.6/0.3=2$ を保ちながら $w_R$ を変化させたとき、選択がどのように変わるか調べよ。
3. 理想的な一対比較行列について、列和の逆数を正規化する方法と行の幾何平均を正規化する方法が同じウェイトを与えることを説明せよ。

## **Kai**

### [小問 1]

各代替案の総合ウェイトは

$$
\begin{aligned}
W_A&=0.5(0.2)+0.3(0.3)+0.2(0.5)=0.29,\\
W_B&=0.5(0.4)+0.3(0.2)+0.2(0.3)=0.32,\\
W_C&=0.5(0.4)+0.3(0.5)+0.2(0.2)=0.39.
\end{aligned}
$$

したがって

$$
\boxed{W_C>W_B>W_A}
$$

より、最良の休暇先は $\boxed{C}$ である。

### [小問 2]

この小問で明記された比 $w_P/w_Q=0.6/0.3=2$ は、小問1の $0.5/0.3$ とは一致しない。ここでは小問2の指定を優先する。

$r=w_R$ とおくと、正規化条件より

$$
w_P=\frac23(1-r),\qquad
w_Q=\frac13(1-r),\qquad 0\leq r\leq1.
$$

各総合ウェイトは

$$
\begin{aligned}
W_A(r)&=\frac7{30}+\frac4{15}r,\\
W_B(r)&=\frac13-\frac1{30}r,\\
W_C(r)&=\frac{13}{30}-\frac7{30}r.
\end{aligned}
$$

$W_A=W_C$ となるのは $r=2/5$ であり、このとき $W_A=W_C=0.34>W_B=0.32$ である。各直線の大小関係を調べると

$$
\boxed{
\begin{array}{ll}
0\leq w_R<0.4 &: C\text{ を選択},\\
w_R=0.4 &: A,C\text{ が同率},\\
0.4<w_R\leq1 &: A\text{ を選択}.
\end{array}}
$$

B が最良となる範囲はない。

### [小問 3]

真の絶対ウェイトを $w_X,w_Y,w_Z>0$、$w_X+w_Y+w_Z=1$ とする。理想的に整合した一対比較行列では

$$
a_{ij}=\frac{w_i}{w_j}.
$$

第 $j$ 列の和は

$$
\sum_i a_{ij}=\frac{\sum_iw_i}{w_j}=\frac1{w_j}
$$

なので、その逆数はちょうど $w_j$ である。

一方、第 $i$ 行の幾何平均は

$$
\left(\prod_{j=X,Y,Z}\frac{w_i}{w_j}\right)^{1/3}
=\frac{w_i}{(w_Xw_Yw_Z)^{1/3}}.
$$

共通因子を除いて正規化すると $w_i$ を得る。したがって、行列が完全に整合している場合、両方法は同一の正規化ウェイトを与える。
