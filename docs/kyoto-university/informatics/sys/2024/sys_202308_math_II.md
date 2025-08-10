---
sidebar_label: "2023年8月実施 数学【II】"
tags:
  - Kyoto-University
  - Calculus
---
# 京都大学 情報学研究科 システム科学専攻 2023年8月実施 数学【II】

## **Author**
[AKIRA, 小红书:94184092292](https://www.xiaohongshu.com/explore/688564530000000023005197?xsec_token=ABj3Hdw0xF5JHzUtFSdmNnWywnPlQ2a3xSeWzad2whPyo=)

## **Description**
$\mathbb{R}$ を実数全体からなる集合, $\pi$ を円周率とする。行列およびベクトルの転置を $\top$ で表す。

### 問1  
以下の設問に答えよ。

(i) 変数 $x > 0$ に対して関数 $f(x) = \frac{1}{x^m} a^{-\frac{1}{x}}$ を考える。$f(x)$ の $x$ に関する最大値が存在するならばそのときの $x$ を求めよ。存在しない場合はそのことを示せ。ただし、$m$ は正の整数、$a > 1$ は定数とする。

(ii) 条件 $\sum_{i=1}^N x_i = 1,\ x_i > 0\ (i = 1, \dots, N)$ の下で $-\sum_{i=1}^N x_i \log x_i$ の最大値を求めよ。ただし、$N$ は正の整数とする。

(iii) 原点を $O$ とする $xy$ 平面上の曲線 $A$:

$$
x = a \cos^3 \theta, \quad y = b \sin^3 \theta \quad (0 < \theta < \frac{\pi}{2})
$$

を考える。ここで、曲線 $A$ 上の点 $(x_0, y_0)$ における接線と $x$ 軸および $y$ 軸との交点をそれぞれ点 $P(p, 0)$ および点 $Q(0, q)$ とする。ただし、$a, b\ (a > 0, b > 0)$ は定数とする。

- (a) $p, q$ を $a, b, x_0, y_0$ を用いて表せ。
- (b) 接点 $(x_0, y_0)$ を動かしたときの、原点 $O$ と点 $P$ および点 $Q$ の $3$ 点を頂点とする三角形の面積の最大値とそのときの接点に対応する $\theta$ の値を求めよ。

### 問2  
以下の設問に答えよ。

(i) 次の極限を求めよ。極限が存在しない場合は、そのことを示せ。

- (1) $\displaystyle \lim_{x \to \infty} (1 + 2x + 3^x)^{1/x}$
- (2) $\displaystyle \lim_{x \to 0} \frac{(1 - \cos x) \sin \frac{1}{x}}{x}$

(ii) $x \in \mathbb{R}$ に対して $f(x)$ を微分可能な実関数とし、その導関数を $f'(x)$ で表す。また、2 次元実ベクトル $\mathbf{x} = (x_1, x_2)^\top \in \mathbb{R}^2$ に対して

$$
f(\mathbf{x}) = (f(x_1), f(x_2))^\top, \quad f'(\mathbf{x}) = (f'(x_1), f'(x_2))^\top
$$

と定義する。

また、整数 $L \ge 2$ および $(L-1)$ 個の $2 \times 2$ 実行列 $A^{(1)}, \dots, A^{(L-1)} \in \mathbb{R}^{2\times 2}$ に対して、実ベクトル $\mathbf{x}^{(1)} = (x_1^{(1)}, x_2^{(1)})^\top, \dots, \mathbf{x}^{(L)} = (x_1^{(L)}, x_2^{(L)})^\top \in \mathbb{R}^2$ が全ての $\ell \in \{1, \dots, L-1\}$ について

$$
\mathbf{x}^{(\ell+1)} = f(A^{(\ell)} \mathbf{x}^{(\ell)})
$$

という関係を満たすものとする。

これ以降、$i, j \in \{1, 2\},\ \ell \in \{1, \dots, L-1\}$ とする。$\mathbf{x}^{(\ell+1)}$ を $\mathbf{x}^{(\ell)}$ の関数とみなすときの $x_i^{(\ell+1)}$ の $x_j^{(\ell)}$ に関する偏微分を

$$
u_{i,j}^{(\ell)} = \frac{\partial x_i^{(\ell+1)}}{\partial x_j^{(\ell)}}
$$

で表し、また、$\mathbf{x}^{(L)}$ を $\mathbf{x}^{(\ell)}$ の関数とみなすときの $x_i^{(L)}$ の $x_j^{(\ell)}$ に関する偏微分を

$$
v_{i,j}^{(\ell)} = \frac{\partial x_i^{(L)}}{\partial x_j^{(\ell)}}
$$

で表す。これらを $(i,j)$ 成分にもつ $2\times 2$ 行列をそれぞれ $U^{(\ell)}, V^{(\ell)}$ とする。また $V^{(L)}$ を $2 \times 2$ 単位行列とする。

以下、$A^{(\ell)}$ の $(i,j)$ 成分を $a_{i,j}^{(\ell)}$ と表記する。なお、必要に応じて $A^{(\ell)}$ の第 $i$ 行を $\mathbf{a}_i^{(\ell)}$ と表記してよい。また、実ベクトル $\mathbf{x} \in \mathbb{R}^2$ に対してその各対角成分をもつ対角行列を返す関数

$$
\mathrm{diag}(\mathbf{x}) = \begin{pmatrix} x_1 & 0 \\ 0 & x_2 \end{pmatrix}
$$

を用いてもよい。


(1) $U^{(\ell)}$ を $\{A^{(m)}\}_{m=1}^{L-1},\ \{\mathbf{x}^{(m)}\}_{m=1}^L$ およびそれらの成分と $f'$ のうち必要なものを用いて表せ。

(2) $V^{(\ell)}$ を $V^{(\ell+1)},\ \{A^{(m)}\}_{m=1}^{L-1},\ \{U^{(m)}\}_{m=1}^{L-1},\ \{\mathbf{x}^{(m)}\}_{m=1}^L,\ f'$ のうち必要なものを用いて表せ。

(3) $k \in \{1, 2\}$ とする。$x_k^{(L)}$ を $(A^{(1)}, \dots, A^{(L-1)})$ の関数とみなすときの $\frac{\partial x_k^{(L)}}{\partial a_{i,j}^{(\ell)}}$ の値を $\{V^{(m)}\}_{m=1}^L,\ \{A^{(m)}\}_{m=1}^{L-1},\ \{\mathbf{x}^{(m)}\}_{m=1}^{L}$ およびそれらの成分と $f'$ のうち必要なものを用いて表せ。

## **Kai**
### 問1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202308_math_II_p1.jpg" width="700" alt=""/>
</figure>

### 問2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202308_math_II_p2.jpg" width="700" alt=""/>
</figure>
