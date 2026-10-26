---
sidebar_label: "2017年8月実施 制御工学 第2問"
tags:
  - Tohoku-University
  - Electrical-Electronic.Control-Theory.State-Space-Representation
  - Electrical-Electronic.Control-Theory.Controllability-and-Observability
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 制御工学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2. 以下の問いに答えよ。

**(1)** 次式で表されるシステムを考える。

$$
\begin{pmatrix}\dot x_1(t)\\\dot x_2(t)\end{pmatrix}
=\begin{pmatrix}-2&0\\1&-1\end{pmatrix}
\begin{pmatrix}x_1(t)\\x_2(t)\end{pmatrix}
+\begin{pmatrix}1\\0\end{pmatrix}u(t)
$$

$$
y(t)=\begin{pmatrix}0&1\end{pmatrix}
\begin{pmatrix}x_1(t)\\x_2(t)\end{pmatrix}
$$

ただし，$u(t)$ は入力，$y(t)$ は出力，$\boldsymbol x(t)=\begin{pmatrix}x_1(t)&x_2(t)\end{pmatrix}^{T}$ は状態ベクトルである。このシステムの可制御性と可観測性を判定せよ。

**(2)** 問(1)のシステムの入力から出力までの伝達関数を求めよ。

**(3)** 問(1)のシステムを可制御正準形

$$
\begin{pmatrix}\dot z_1(t)\\\dot z_2(t)\end{pmatrix}
=\begin{pmatrix}0&1\\-a_1&-a_2\end{pmatrix}
\begin{pmatrix}z_1(t)\\z_2(t)\end{pmatrix}
+\begin{pmatrix}0\\1\end{pmatrix}u(t)
$$

$$
y(t)=\begin{pmatrix}c_1&c_2\end{pmatrix}
\begin{pmatrix}z_1(t)\\z_2(t)\end{pmatrix}
$$

にする座標変換 $\boldsymbol x(t)=T\boldsymbol z(t)$ を考える。ただし $\boldsymbol z(t)=\begin{pmatrix}z_1(t)&z_2(t)\end{pmatrix}^{T}$ である。変換行列 $T$ と定数 $a_1,a_2,c_1,c_2$ を定めよ。

**(4)** 問(3)のシステムをブロック線図で表せ。図中に $u,y,z_1,z_2$ を明示すること。

**(5)** 問(1)のシステムに状態フィードバック $u(t)=-\begin{pmatrix}k_1&k_2\end{pmatrix}\boldsymbol x(t)$ を適用することを考える。閉ループ系の特性方程式が $s^2+\alpha s+\beta=0$ となるとき，フィードバックゲイン $k_1,k_2$ を定数 $\alpha,\beta$ を用いて表せ。

**(6)** 問(5)において，状態フィードバックを適用した制御系が漸近安定となるための $k_1,k_2$ の条件を求めよ。

### 题目描述

2. 回答下列问题。

**(1)** 考虑由下式表示的系统。

$$
\begin{pmatrix}\dot x_1(t)\\\dot x_2(t)\end{pmatrix}
=\begin{pmatrix}-2&0\\1&-1\end{pmatrix}
\begin{pmatrix}x_1(t)\\x_2(t)\end{pmatrix}
+\begin{pmatrix}1\\0\end{pmatrix}u(t)
$$

$$
y(t)=\begin{pmatrix}0&1\end{pmatrix}
\begin{pmatrix}x_1(t)\\x_2(t)\end{pmatrix}
$$

其中 $u(t)$ 为输入，$y(t)$ 为输出，$\boldsymbol x(t)=\begin{pmatrix}x_1(t)&x_2(t)\end{pmatrix}^{T}$ 为状态向量。判断该系统的可控性和可观测性。

**(2)** 求第(1)问中系统从输入到输出的传递函数。

**(3)** 考虑坐标变换 $\boldsymbol x(t)=T\boldsymbol z(t)$，将第(1)问中的系统变为下列可控标准形。

$$
\begin{pmatrix}\dot z_1(t)\\\dot z_2(t)\end{pmatrix}
=\begin{pmatrix}0&1\\-a_1&-a_2\end{pmatrix}
\begin{pmatrix}z_1(t)\\z_2(t)\end{pmatrix}
+\begin{pmatrix}0\\1\end{pmatrix}u(t)
$$

$$
y(t)=\begin{pmatrix}c_1&c_2\end{pmatrix}
\begin{pmatrix}z_1(t)\\z_2(t)\end{pmatrix}
$$

其中 $\boldsymbol z(t)=\begin{pmatrix}z_1(t)&z_2(t)\end{pmatrix}^{T}$。确定变换矩阵 $T$ 和常数 $a_1,a_2,c_1,c_2$。

**(4)** 用方框图表示第(3)问中的系统，图中必须明确标出 $u,y,z_1,z_2$。

**(5)** 考虑对第(1)问中的系统施加状态反馈 $u(t)=-\begin{pmatrix}k_1&k_2\end{pmatrix}\boldsymbol x(t)$。当闭环系统的特征方程为 $s^2+\alpha s+\beta=0$ 时，用常数 $\alpha,\beta$ 表示反馈增益 $k_1,k_2$。

**(6)** 对第(5)问，求施加状态反馈后的控制系统渐近稳定所需的 $k_1,k_2$ 的条件。

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
\begin{gathered}
\boxed{T=\begin{pmatrix}1&1\\1&0\end{pmatrix}},\\
T^{-1}AT=\begin{pmatrix}0&1\\-2&-3\end{pmatrix},\\
T^{-1}b=\begin{pmatrix}0\\1\end{pmatrix},\\
cT=\begin{pmatrix}1&0\end{pmatrix}.
\end{gathered}
$$

### (4)

$\dot z_1=z_2$、$\dot z_2=u-2z_1-3z_2$、$y=z_1$ より、次の線図となる。

![可制御正準形のブロック線図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/tohoku201708_control2.svg)

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
