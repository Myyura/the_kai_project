---
sidebar_label: "2018年度 専門部門 問題5（材料力学）"
tags:
  - Nagoya-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Stress-Transformation
  - Engineering.Mechanics-of-Materials.Composite-Beams
---

# 名古屋大学 工学研究科 機械航空系 2018年度 専門部門 問題5

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### (1)

長さ $l$、曲げ剛性 $EI$ 一定のはりの左端を単純支持、右端を固定し、中央 $x=l/2$ に下向きの集中荷重 $P$ を加える。左端を $x=0$ とし、下向きのたわみ $w$ を正とする。固定端の曲げモーメントを $M_0$ とし、はり下面を引張りとする曲げを正とする。

1. 曲げモーメント $M(x)$ を $M_0$ を用いて表せ。
2. 左端反力と $M_0$ を求めよ。
3. たわみ曲線を求めよ。

### (2)

長さ $l$、内径 $d_1$、外径 $d_2$ の円筒（縦弾性係数 $E_1$、線膨張係数 $\alpha_1$）の内部に、同じ長さ・直径 $d_0$ の丸棒（$E_0,\alpha_0$）を同軸に置き、両端を剛体板で固定する。$d_2>d_1>d_0$、$\alpha_1>\alpha_0$ とする。温度 $T_0$ では無応力で、全体を一様に $T_1>T_0$ まで加熱する。ポアソン効果は無視する。

1. 丸棒と円筒のひずみと応力の関係を記せ。
2. 丸棒・円筒に生じる応力を求めよ。
3. 全体の伸びを求めよ。

### (3)

平面応力状態 $\sigma_x=80\ \mathrm{MPa}$、$\sigma_y=-20\ \mathrm{MPa}$、$\tau_{xy}=\tau_{yx}=50\ \mathrm{MPa}$ を考える。

1. モールの応力円を描け。
2. 主応力とその方向を求めよ。
3. 最大せん断応力とその面の方向を求めよ。

![はりおよび加熱される同軸部材](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya-university/engineering/mae/2018/nagoya2017_specialist5_setup.svg)

#### 题目描述

（1）等截面梁长 $l$、弯曲刚度 $EI$，左端简支、右端固支，中点承受向下集中力 $P$。坐标自左端起，挠度向下为正，弯矩以底面受拉为正，右端弯矩为 $M_0$。以 $M_0$ 表示弯矩分布，求左反力、固定端弯矩和挠曲线。（2）长 $l$、内外径 $d_1,d_2$ 的圆筒内有同长直径 $d_0$ 的同轴圆杆，两端由刚板连接，$d_2>d_1>d_0$。两者弹性模量分别为 $E_1,E_0$，热膨胀系数满足 $\alpha_1>\alpha_0$。初温 $T_0$ 无应力，均匀加热至 $T_1>T_0$，忽略泊松效应。写出应力应变关系，求两材料应力和总伸长。（3）给定 $\sigma_x=80$、$\sigma_y=-20$、$\tau_{xy}=50$（单位 MPa），绘制莫尔圆，求主应力及方向、最大剪应力及其平面方向。

## **Kai**

### (1)

#### 1)

左端の上向き反力を $R_A$ とすると、$M(l)=R_Al-Pl/2=M_0$ より $R_A=M_0/l+P/2$。従って

$$
\boxed{M(x)=\begin{cases}
(M_0/l+P/2)x,&0\le x\le l/2,\\
(M_0/l-P/2)x+Pl/2,&l/2\le x\le l.
\end{cases}}
$$

#### 2), 3)

下向きたわみに対して $EIw''=-M$ を区間ごとに積分する。条件は $w(0)=0$、$w(l)=w'(l)=0$、および $x=l/2$ で $w,w'$ が連続することである。これらから

$$
\boxed{R_A=\frac{5P}{16}},\qquad\boxed{M_0=-\frac{3Pl}{16}},
$$

$$
\boxed{w(x)=\begin{cases}
\displaystyle\frac{Px(3l^2-5x^2)}{96EI},&0\le x\le l/2,\\[4pt]
\displaystyle\frac{P(l-x)^2(11x-2l)}{96EI},&l/2\le x\le l.
\end{cases}}
$$

例えば中央たわみは $w(l/2)=7Pl^3/(768EI)$ である。

### (2)

#### 1), 2)

$\Delta T=T_1-T_0$、$A_0=\pi d_0^2/4$、$A_1=\pi(d_2^2-d_1^2)/4$ とおく。引張応力を正に取り、各部材について

$$
\boxed{\varepsilon_i=\frac{\sigma_i}{E_i}+\alpha_i\Delta T\quad(i=0,1)}.
$$

剛体板により $\varepsilon_0=\varepsilon_1$、外力がないため $A_0\sigma_0+A_1\sigma_1=0$。連立して

$$
\boxed{\sigma_0=\frac{E_0E_1(d_2^2-d_1^2)(\alpha_1-\alpha_0)\Delta T}
{E_0d_0^2+E_1(d_2^2-d_1^2)}}>0,
$$

$$
\boxed{\sigma_1=-\frac{E_0E_1d_0^2(\alpha_1-\alpha_0)\Delta T}
{E_0d_0^2+E_1(d_2^2-d_1^2)}}<0.
$$

丸棒は引張り、円筒は圧縮となる。

#### 3)

$$
\boxed{\lambda=l\Delta T\,
\frac{\alpha_0E_0d_0^2+\alpha_1E_1(d_2^2-d_1^2)}
{E_0d_0^2+E_1(d_2^2-d_1^2)}}.
$$

### (3)

#### 1)

モール円の中心と半径は

$$
C=\frac{80-20}{2}=30\ \mathrm{MPa},\qquad
r=\sqrt{50^2+50^2}=50\sqrt2\ \mathrm{MPa}.
$$

従って円の式は $\boxed{(\sigma-30)^2+\tau^2=5000}$（応力の単位は MPa）。

![モールの応力円。せん断応力を上向き正に表示](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya-university/engineering/mae/2018/nagoya2017_specialist5_mohr.svg)

#### 2)

$$
\boxed{\sigma_1=30+50\sqrt2\simeq100.71\ \mathrm{MPa}},\qquad
\boxed{\sigma_2=30-50\sqrt2\simeq-40.71\ \mathrm{MPa}}.
$$

$x$ 軸から面の法線への反時計回り角を $\psi$ とすると

$$
\sigma_n=30+50\cos2\psi+50\sin2\psi,\qquad
\tau_n=-50\sin2\psi+50\cos2\psi.
$$

従って主方向は $\boxed{\psi_1=22.5^\circ,\ \psi_2=112.5^\circ}$（各 $180^\circ$ の周期）。

#### 3)

$$
\boxed{|\tau|_{\max}=50\sqrt2\simeq70.71\ \mathrm{MPa}}.
$$

対応する面の法線は $\boxed{\psi=-22.5^\circ,\ 67.5^\circ}$。前者で $\tau_n=+50\sqrt2$、後者で $-50\sqrt2$ となる。

## **Reference**

- [名古屋大学公式問題：2017年8月23日実施・専門部門、PDF 6ページ](https://www.mae.nagoya-u.ac.jp/application/files/1515/2475/5975/H29_.pdf)
