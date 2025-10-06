---
sidebar_label: "2020年8月実施 数学【I】"
tags:
  - Kyoto-University
  - Linear-Algebra
---
# 京都大学 情報学研究科 システム科学専攻 2020年8月実施 数学【I】

## **Author**
[AKIRA](https://www.xiaohongshu.com/explore/6876f017000000000b02e5de?xsec_token=ABmrCiL2MzCm_HVVdiD-IywB7NzKDDRf5z4eqaPfw2Wck=)

## **Description**
行列 $A$ の転置を $A^{\mathrm{T}}$ で表す。
問1、問2 はそれぞれ別の解答用紙に解答すること。

### 問1
以下の設問に答えよ。

(i) 3次元実ベクトル空間を考える。
$[1, 1, 1]^{\mathrm{T}}$ を基底とする1次元部分空間 $V$ への正射影について、その射影行列と $[x, y, z]^{\mathrm{T}}$ の像を求めよ。
また、$V$ の直交補空間の正規直交基底を1つ求めよ。

(ii) 行列 $A$ について、その階数と行列式の値を求めよ。
また、逆行列があれば逆行列を求めよ。

$$
A =
\begin{bmatrix}
1 & 2 & 3 \\
2 & 0 & 2 \\
3 & 2 & 1
\end{bmatrix}
$$

(iii) 次のブロック行列 $B$ の行列式の値 $\det B$ を求めよ。導出過程も示すこと。
ただし、$X, Y, Z$ はそれぞれ $n \times n, n \times m, m \times m$ の行列であり、$\det X \ne 0$ とする。
また、$O$ は $m \times n$ の零行列である。必要であれば、2つの正方行列 $P, Q$ について、
$\det (PQ) = \det P \cdot \det Q$ であることを用いてよい。

$$
B =
\begin{bmatrix}
X & Y \\
O & Z
\end{bmatrix}
$$

### 問2
以下の設問に答えよ。それぞれ、答えだけでなく、その理由についても示すこと。

#### (i)
$n \times n$ の実数値対称行列 $C$ の固有値を
$\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_n$、対応する固有ベクトルを $e_1, e_2, \dots, e_n$ とする。
ただし、$e_i \ (i=1, \dots, n)$ は互いに直交し、それぞれ長さ $1$ の $n$ 次元ベクトルである。
$n$ 次元ベクトル $x \ne 0$ に対して定義される

$$
R(x) = \frac{x^{\mathrm{T}} C x}{x^{\mathrm{T}} x}
$$

について考える。

(1) スカラー $a_i \ (i = 1, \dots, n)$ を用いて、$x$ を

$$
x = a_1 e_1 + a_2 e_2 + \cdots + a_n e_n
$$

としたとき、$R(x)$ を $\lambda_i \ (i = 1, \dots, n)、a_i\ (i = 1, \dots, n)$ を用いて表せ。

(2) $R(x)$ の最大値を $\lambda_i\ (i = 1, \dots, n)$ を用いて表せ。
また、その最大値を与える $x \ne 0$ はいかなるものか、$a_i\ (i = 1, \dots, n)$ などを用いて示せ。

(3) $R(x)$ の最小値を $\lambda_i\ (i = 1, \dots, n)$ を用いて表せ。
また、その最小値を与える $x \ne 0$ はいかなるものか、$a_i\ (i = 1, \dots, n)$ などを用いて示せ。

#### (ii)
3つの実数 $(x, y, z)$ が $x^2 + y^2 + z^2 = 1$ を満たすとき、

$$
J = 4x^2 + y^2 + 4z^2 + 4xy + 4yz - 2zx
$$

の最大値と最小値を求め、それぞれを与える $(x, y, z)$ をすべて示せ。


## **Kai**
### 問1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202008_math_I_p1_s.jpg" width="700" alt=""/>
</figure>

### 問2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202008_math_I_p2_s.jpg" width="700" alt=""/>
</figure>