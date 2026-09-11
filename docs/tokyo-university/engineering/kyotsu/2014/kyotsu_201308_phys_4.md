---
sidebar_label: '2013年8月実施 物理学4'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Fermat-Principle-and-Snells-Law
  - Physics.Electromagnetism.Thin-Lens-and-Fraunhofer-Diffraction
---

# 東京大学 工学系研究科 2013年8月実施 物理学4

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$xy$ 面内の A$(-a,0)$（$a>0$）に点光源を置く。光軸を $x$ 軸とする薄い平凸レンズの平面側を $x=0$ に置く。凸面は曲率半径 $R$ の球面で、開口半径を $r$、高さ $y_0$ での厚さを $T(y_0)$、最大厚さを $T_0$ とする。光は B$(b,0)$（$b>0$）に結像する。周囲の空気の屈折率を $1$、レンズの屈折率を $n$ とする。C$(0,y_0)$（$|y_0|<r$）に入射した光は凸面上の点 D から射出する。

### I

A から C、D を通って B に至る光線を考える。AC、CB の幾何学的長さを $L_{AC},L_{CB}$ とする。

1. $L_{AC},L_{CB},T(y_0)$ を求めよ。
2. $|y_0|\ll a,b,R$ として、これらを多項式で近似せよ。$|s|\ll1$ における $(1+s)^m\simeq1+ms$ を用いてよい。
3. 光線と $x$ 軸のなす角も小さいとすると、CD、DB の長さはそれぞれ $T(y_0),L_{CB}-T(y_0)$ と近似できる。レンズ内の光路長は幾何学的長さの $n$ 倍であることを用い、A から B までの光路長 $L(y_0)$ を求めよ。
4. フェルマーの原理より、A と B が結像関係にあるとき $L(y_0)$ は $y_0$ に依存しない。この原理から $a,b$ の関係とレンズの焦点距離を求めよ。

### II

実際の像は光の波動性のため有限の大きさを持つ。レンズの平面側にスリットを設け、$xy$ 面近傍を通る光だけを通過させる。A から C、D を通って集光面上の B$'(b,y_b)$ に至る光路長を $L'(y_0,y_b)$ とする。B$'$ の電場の複素振幅は光波の重ね合わせであり、光路長に応じて位相が $kL'$ だけ変わる。$k=2\pi/\lambda$ は波数、$\lambda$ は波長、$i$ は虚数単位、$A_0$ は複素定数であり、

$$
E(y_b)=A_0\int_{-r}^r\exp\!\left[ikL'(y_0,y_b)\right]dy_0. \tag{2}
$$

1. I と同様の近似で $L'(y_0,y_b)$ を求め、$y_0$ の一次式になることを示せ。
2. $x=b$ における強度分布 $|E(y_b)|^2$ を求めよ。
3. $|E(y_b)|^2$ を図示し、光強度が極小となる $y_b$ を求めよ。

![平凸レンズの幾何光学と集光面](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2014/kyotsu_201308_phys_4_lens_audited.svg)

#### 题目描述

在 $xy$ 平面的 A$(-a,0)$（$a>0$）放置点光源。薄平凸透镜的光轴为 $x$ 轴，平面侧位于 $x=0$，凸面为曲率半径 $R$ 的球面，开口半径为 $r$。高度 $y_0$ 处厚度为 $T(y_0)$，最大厚度为 $T_0$。光在 B$(b,0)$（$b>0$）成像。空气折射率为 $1$，透镜折射率为 $n$。从 C$(0,y_0)$（$|y_0|<r$）入射的光由凸面上的 D 射出。

### I

考虑由 A 经 C、D 到 B 的光线，AC、CB 的几何长度分别为 $L_{AC},L_{CB}$。

1. 求 $L_{AC},L_{CB},T(y_0)$。
2. 在 $|y_0|\ll a,b,R$ 下，将三者近似为多项式；可用 $|s|\ll1$ 时的 $(1+s)^m\simeq1+ms$。
3. 再假设光线与 $x$ 轴夹角很小，则 CD、DB 长度分别近似为 $T(y_0)$、$L_{CB}-T(y_0)$。透镜内光程为几何长度的 $n$ 倍，求 A 到 B 的光程 $L(y_0)$。
4. 根据费马原理，A、B 成像时 $L(y_0)$ 不随 $y_0$ 改变。由此求 $a,b$ 的关系和焦距。

### II

光的波动性使实际像具有有限大小。在透镜平面侧放置狭缝，仅让 $xy$ 平面附近的光通过。由 A 经 C、D 到聚焦平面 B$'(b,y_b)$ 的光程为 $L'(y_0,y_b)$。B$'$ 处电场复振幅由各条路径的光波叠加得到，其相位随光程改变 $kL'$。令 $k=2\pi/\lambda$ 为波数，$\lambda$ 为波长，$i$ 为虚数单位，$A_0$ 为复常数，给定

$$
E(y_b)=A_0\int_{-r}^r\exp\!\left[ikL'(y_0,y_b)\right]dy_0.
$$

1. 采用与 I 相同的近似，求 $L'(y_0,y_b)$，证明其为 $y_0$ 的一次式。
2. 求 $x=b$ 处的强度分布 $|E(y_b)|^2$。
3. 绘出强度曲线，求所有光强极小的位置 $y_b$。

## **Kai**

### I

**1.** 球面の中心は $(T_0-R,0)$ にあるから、

$$
\boxed{L_{AC}=\sqrt{a^2+y_0^2},\quad L_{CB}=\sqrt{b^2+y_0^2},\quad
T(y_0)=T_0-R+\sqrt{R^2-y_0^2}.}
$$

**2.** 二次まで残すと、

$$
\boxed{L_{AC}\simeq a+\frac{y_0^2}{2a},\quad
L_{CB}\simeq b+\frac{y_0^2}{2b},\quad
T(y_0)\simeq T_0-\frac{y_0^2}{2R}.}
$$

**3.** 空気中とレンズ内の光路長を足して、

$$
\boxed{L(y_0)\simeq L_{AC}+L_{CB}+(n-1)T(y_0)
=a+b+(n-1)T_0+\frac{y_0^2}{2}\left(\frac1a+\frac1b-\frac{n-1}{R}\right).}
$$

**4.** $y_0^2$ の係数が零であることから、

$$
\boxed{\frac1a+\frac1b=\frac{n-1}{R}=\frac1f,\qquad f=\frac{R}{n-1}.}
$$

### II

**1.** $L_{CB'}\simeq b+(y_b-y_0)^2/(2b)$ と結像条件を用いると、

$$
\boxed{L'(y_0,y_b)\simeq a+b+(n-1)T_0+\frac{y_b^2}{2b}-\frac{y_b}{b}y_0.}
$$

したがって、$y_0$ の一次式である。

**2.** $C(y_b)=a+b+(n-1)T_0+y_b^2/(2b)$、$u=kry_b/b$ とおくと、

$$
E(y_b)=A_0e^{ikC(y_b)}\int_{-r}^re^{-iky_by_0/b}dy_0
=2rA_0e^{ikC(y_b)}\frac{\sin u}{u}.
$$

よって、

$$
\boxed{|E(y_b)|^2=4r^2|A_0|^2\left(\frac{\sin u}{u}\right)^2,\qquad
u=\frac{2\pi r y_b}{\lambda b}.}
$$

ただし $u=0$ では連続極限をとり、$|E(0)|^2=4r^2|A_0|^2$ である。

**3.** 中央の主極大の両側に減衰する副極大が並び、極小値は零である。その位置は、

$$
\boxed{y_b=\frac{m\lambda b}{2r},\qquad m=\pm1,\pm2,\ldots.}
$$

![集光面の単スリット回折強度](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2014/kyotsu_201308_phys_4_diffraction_audited.svg)

