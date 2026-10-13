---
sidebar_label: "2017年秋季 制御工学 第2問"
tags:
  - Tohoku-University
  - Electrical-Electronic.Control-Theory.State-Space-Representation
  - Electrical-Electronic.Control-Theory.Controllability-and-Observability
---

# 東北大学 工学研究科 機械・知能系 2017年秋季 制御工学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2017年10月・2018年4月入学対象、2017年8月実施。

次の状態方程式で表されるシステムを考える。

$$
\dot{\boldsymbol x}=A\boldsymbol x+bu,\quad y=c\boldsymbol x,\qquad
A=\begin{pmatrix}-2&0\\1&-1\end{pmatrix},\quad b=\begin{pmatrix}1\\0\end{pmatrix},\quad c=\begin{pmatrix}0&1\end{pmatrix}.
$$

1. 可制御性と可観測性を調べよ。
2. 入力 $u$ から出力 $y$ までの伝達関数を求めよ。
3. $\boldsymbol x=T\boldsymbol z$ により、$\widetilde A=\begin{pmatrix}0&1\\-a_1&-a_2\end{pmatrix}$、$\widetilde b=(0,1)^{\mathsf T}$、$\widetilde c=(c_1,c_2)$ の可制御正準形に変換する。$a_1,a_2,c_1,c_2,T$ を求めよ。
4. (3)のシステムのブロック線図を描け。入力 $u$、出力 $y$、状態変数 $z_1,z_2$ を明示せよ。
5. 状態フィードバック $u=-k_1x_1-k_2x_2$ により特性多項式を $s^2+\alpha s+\beta$ とする $k_1,k_2$ を求めよ。
6. 状態フィードバック系が漸近安定になる $k_1,k_2$ の条件を求めよ。

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

给定 $A=[-2,0;1,-1]$、$b=(1,0)^{\mathsf T}$、$c=(0,1)$ 的单输入单输出状态空间系统。（1）判断可控与可观；（2）求传递函数；（3）以 $x=Tz$ 化为题定的可控标准形；（4）画出包含两状态的框图；（5）求令闭环特征多项式为 $s^2+\alpha s+\beta$ 的反馈增益；（6）求渐近稳定条件。

## **Kai**

### (1)

$$
\mathcal C=(b,Ab)=\begin{pmatrix}1&-2\\0&1\end{pmatrix},\qquad
\mathcal O=\begin{pmatrix}c\\cA\end{pmatrix}=\begin{pmatrix}0&1\\1&-1\end{pmatrix}.
$$

両者とも階数2なので、可制御かつ可観測である。

### (2)

$$
G(s)=c(sI-A)^{-1}b=\boxed{\frac1{(s+1)(s+2)}}.
$$

### (3)

分母と分子を比較して $\boxed{a_1=2,\ a_2=3,\ c_1=1,\ c_2=0}$。変換行列は

$$
\boxed{T=\begin{pmatrix}1&1\\1&0\end{pmatrix}},\quad
T^{-1}AT=\begin{pmatrix}0&1\\-2&-3\end{pmatrix},\quad T^{-1}b=\begin{pmatrix}0\\1\end{pmatrix},\quad cT=\begin{pmatrix}1&0\end{pmatrix}.
$$

### (4)

$\dot z_1=z_2$、$\dot z_2=u-2z_1-3z_2$、$y=z_1$ より、次の線図となる。

![可制御正準形のブロック線図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku-university/engineering/mech/2018/tohoku2017_control2.svg)

### (5)

$$
\det\{sI-(A-bk)\}=s^2+(3+k_1)s+(2+k_1+k_2).
$$

係数比較から

$$
\boxed{k_1=\alpha-3,\qquad k_2=\beta-\alpha+1}.
$$

### (6)

実係数2次多項式の両根が左半平面にある条件より

$$
\boxed{k_1>-3,\qquad k_1+k_2>-2}.
$$

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 20ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
