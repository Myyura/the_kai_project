---
sidebar_label: 2006年8月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Constrained-Optimization
  - Mathematics.Linear-Algebra.Projection-Operator
---

# 京都大学 情報学研究科 システム科学専攻 2006年8月実施 数学【II】

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
$f(x)=\log(1+x)$、$g(x)=(1+x)^{-1/x}$ とする。

(i) $f$ の原点でのテイラー展開を三次の項まで求めよ。

(ii) $\lim_{x\to0}g(x)$ を求めよ。

(iii) $g$ の原点でのテイラー展開を二次の項まで求めよ。$g$ が $|x|<1$ で解析的であることを証明なしに用いてよい。

### 問2
三次元直交座標系で、楕円面 $E$ と原点を通る平面 $P$ を

$$
E:\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1\quad(a,b,c>0),\qquad
P:lx+my+nz=0\quad(l,m,n\ne0)
$$

とする。

(i) $D=E\cap P$ の図形名を答えよ。

(ii) $D$ 上の点 $(p,q,r)$ について $p$ の最大値 $p_{\max}$ を求めよ。

(iii) 座標軸に平行な辺をもち $D$ を含む最小の直方体を $R$ とする。その最長対角線の長さ $L$ に対し $L^2$ を求めよ。

#### 题目描述

### 问1
设 $f(x)=\log(1+x)$，$g(x)=(1+x)^{-1/x}$。

(i) 求 $f$ 在原点至三次项的泰勒展开。(ii) 求 $\lim_{x\to0}g(x)$。(iii) 求 $g$ 在原点至二次项的泰勒展开，可直接使用它在 $|x|<1$ 内解析这一事实。

### 问2
三维正交坐标系中，椭球面 $E:x^2/a^2+y^2/b^2+z^2/c^2=1$（$a,b,c>0$）与过原点平面 $P:lx+my+nz=0$（$l,m,n\ne0$）相交于 $D$。

(i) 回答 $D$ 的图形名称。(ii) 求 $D$ 上点 $(p,q,r)$ 的 $p$ 的最大值。

(iii) 设 $R$ 是各边平行于坐标轴且包含 $D$ 的最小长方体，最长对角线为 $L$，求 $L^2$。

## **Kai**

### 問1
(i) $f(x)=x-x^2/2+x^3/3+O(x^4)$。

(ii) $g(x)=\exp(-\log(1+x)/x)$ より、極限は $\boxed{e^{-1}}$。

(iii) (i) を代入して指数関数を展開すると

$$
g(x)=e^{-1}\exp\left(\frac x2-\frac{x^2}3+O(x^3)\right)
=\boxed{\frac1e\left(1+\frac x2-\frac{5x^2}{24}\right)+O(x^3)}.
$$

### 問2
(i) 楕円（特別な場合として円を含む）。

(ii) $u=(x/a,y/b,z/c)^T$、$v=(al,bm,cn)^T$ とおくと、条件は $\|u\|=1,v^Tu=0$。$S=\|v\|^2=a^2l^2+b^2m^2+c^2n^2$ とおく。$u$ は $v^\perp$ に属するから、$e_1$ の同空間への射影を用いて

$$
\max u_1=\left\|e_1-\frac{al}{S}v\right\|
=\sqrt{1-\frac{a^2l^2}{S}}.
$$

この射影を正規化した $u$ で等号が達成される。よって

$$
\boxed{p_{\max}=a\sqrt{\frac{b^2m^2+c^2n^2}{S}}}.
$$

(iii) 原点対称性より辺長は $2p_{\max},2q_{\max},2r_{\max}$。他の座標も循環的に求めると

$$
\boxed{L^2=\frac4S\left\{a^2b^2(l^2+m^2)+a^2c^2(l^2+n^2)+b^2c^2(m^2+n^2)\right\}}.
$$


![楕円面の中心断面と軸に平行な外接直方体](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2007/sys_200608_math_II_section.svg)

