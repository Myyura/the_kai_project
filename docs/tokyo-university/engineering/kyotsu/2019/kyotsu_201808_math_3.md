---
sidebar_label: '数学 第3問'
tags:
  - Tokyo-University
  - Mathematics.Complex-Analysis.Complex-Roots
  - Mathematics.Complex-Analysis.Conformal-Mapping
  - Mathematics.Complex-Analysis.Laurent-Series
  - Mathematics.Complex-Analysis.Branch-Cut
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
---

# 東京大学 工学系研究科 2019年度 数学 第3問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I.

1. $z^5=1$ のすべての解を極形式で表し、複素平面上に図示せよ。
2. 写像 $f(z)=e^{iz}$ による領域 $D=\{z:\operatorname{Re}z\ge0,\ 0\le\operatorname{Im}z\le1\}$ の像を複素平面上に図示せよ。
3. $z^2e^{1/z}$ の $z=0$ における留数を求めよ。

### II.
$a>0$、$\displaystyle f(z)=\frac{(\log z)^2}{(z+a)^2}$、$R>a>r>0$ とする。$C=C_++C_R+C_-+C_r$ は正の実軸を切断とする鍵穴型の積分経路であり、上側の $C_+$ は $r$ から $R$、外円 $C_R$ は反時計回り、下側の $C_-$ は $R$ から $r$、内円 $C_r$ は時計回りに進む。$C_+$ 上で $\log z$ は主値をとる。

1. 留数定理を用いて $\displaystyle\oint_C f(z)\,dz$ を求めよ。
2. 前問を用いて $\displaystyle\int_0^\infty\frac{\log x}{(x+a)^2}\,dx$ を求めよ。

#### 题目描述

##### I.

1. 用极坐标形式求 $z^5=1$ 的全部解，并在复平面上画出。
2. 映射 $f(z)=e^{iz}$ 下，画出区域 $D=\{z:\operatorname{Re}z\ge0,\ 0\le\operatorname{Im}z\le1\}$ 的像。
3. 求 $z^2e^{1/z}$ 在 $z=0$ 的留数。

##### II.
设 $a>0$，$\displaystyle f(z)=\frac{(\log z)^2}{(z+a)^2}$，$R>a>r>0$。积分路径 $C=C_++C_R+C_-+C_r$ 为绕正实轴割线的钥匙孔路径：上岸 $C_+$ 从 $r$ 到 $R$，外圆 $C_R$ 逆时针，下岸 $C_-$ 从 $R$ 到 $r$，内圆 $C_r$ 顺时针；在 $C_+$ 上 $\log z$ 取主值。

1. 用留数定理计算 $\displaystyle\oint_C f(z)\,dz$。
2. 利用前问计算 $\displaystyle\int_0^\infty\frac{\log x}{(x+a)^2}\,dx$。

## **Kai**

### I.

1. すべての解は

$$
\boxed{z_k=e^{2\pi ik/5},\quad k=0,1,2,3,4},
$$

すなわち、単位円上で $1$ を一つの頂点とする正五角形の頂点である。

2. $z=x+iy$ と書けば $e^{iz}=e^{-y}e^{ix}$ である。$x\ge0$ により任意の偏角が得られるので、像は閉円環

$$
\boxed{e^{-1}\le|w|\le1}.
$$

3. Laurent 展開は

$$
z^2e^{1/z}=z^2+z+\frac12+\frac1{6z}+\cdots,
$$

したがって留数は $\boxed{1/6}$ である。

![単位根、円環および鍵穴型積分経路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2019/math_3_complex.svg)

### II.

1. 切断平面上で $0<\arg z<2\pi$ ととる。唯一の極は $z=-a$ であり、

$$
\operatorname{Res}_{-a}f=
\left.\frac{d}{dz}(\log z)^2\right|_{z=-a}
=-\frac2a(\log a+i\pi).
$$

したがって

$$
\boxed{\oint_C f(z)\,dz=\frac{4\pi^2}{a}-\frac{4\pi i}{a}\log a}.
$$

2. $r\to0^+$、$R\to\infty$ のとき、両円弧の積分はそれぞれ $O(r\log^2r)$、$O(\log^2R/R)$ で零に収束する。切断の両側の対数値は $2\pi i$ だけ異なるので、

$$
\oint_C f(z)\,dz\longrightarrow
\int_0^\infty\frac{(\log x)^2-(\log x+2\pi i)^2}{(x+a)^2}\,dx
=\frac{4\pi^2}{a}-4\pi i\int_0^\infty\frac{\log x}{(x+a)^2}\,dx.
$$

比較して

$$
\boxed{\int_0^\infty\frac{\log x}{(x+a)^2}\,dx=\frac{\log a}{a}}.
$$

