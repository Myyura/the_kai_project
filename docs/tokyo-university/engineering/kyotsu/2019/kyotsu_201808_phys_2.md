---
sidebar_label: '2018年8月実施 物理学 第2問'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Electric-Potential-and-Field
  - Physics.Electromagnetism.Magnetization-and-Bound-Currents
  - Physics.Electromagnetism.Ampere-Law
---

# 東京大学 工学系研究科 2018年8月実施 物理学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

真空中の電荷、磁化および電流が作る電磁場を考える。真空の誘電率を $\varepsilon_0$、透磁率を $\mu_0$ とし、重力は無視する。

### I

$xy$ 平面に、内半径 $a$、外半径 $b$、中心 O の穴あき円板があり、面密度 $-\sigma\ (\sigma>0)$ の電荷が一様に分布している。

1. 点 $\mathrm P(0,0,z)$ の電位と電場を求めよ。
2. $z\gg b$ における電場の近似式を求め、その物理的意味を簡潔に説明せよ。
3. $a\to0$, $b\to\infty$ の極限で、一様に帯電した無限平面の電場に一致することを示せ。
4. 十分遠方の点 $\mathrm C(0,0,c)\ (c>0)$ に、電荷 $-q\ (q>0)$、質量 $m$ の粒子を置き、初速度 $\boldsymbol v_0=(0,0,-v_0)\ (v_0>0)$ を与える。O に最も近づいたときの $z$ 座標を求めよ。$v_0$ は十分小さく、運動中の粒子の座標 $z_c$ は常に $z_c\gg b$ を満たす。$t\to\infty$ での粒子の速度 $\boldsymbol v_c$ も求めよ。
5. O 近傍の点 $\mathrm D(0,0,d)\ (d\simeq0)$ に、電荷 $q\ (q>0)$、質量 $m$ の粒子を置き、静かに放す。その運動を説明し、周期を求めよ。電磁波の放射は無視してよい。

### II

真空中に内半径 $a$、外半径 $b$、厚さ $t$ の、断面が長方形の円筒状磁性体を置く。

1. 磁性体が中心軸方向に一様な大きさ $M$ で磁化している。磁化電流が流れる場所と向きを説明せよ。
2. 磁性体が周方向に一定の大きさ $M$ で磁化している。磁性体の内部と外部の磁場および磁束密度を求めよ。
3. 磁性体に導線を一様に $N$ 回巻き、環状ソレノイドとする。電流 $I$ を流したとき、磁性体の断面を通る全磁束を求めよ。通電前の磁化は零、透磁率は $\mu$ とし、漏れ磁束は無視する。
4. ソレノイド内の磁束密度と磁化を一様と近似し、平均周長 $2\pi(a+b)/2$ を用いて磁束密度と磁化を求めよ。さらに $a\gg b-a$ の場合に、この磁束密度が 3 の磁束から求める値と一致することを示せ。必要なら $|x|\ll1$ で $\log(1+x)\simeq x$ を用いてよい。

![帯電円環板、軸方向・周方向磁化、および環状ソレノイド](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2019/kyotsu_201808_phys_2_annulus_torus_audited.svg)

#### 题目描述

考虑真空中电荷、磁化和电流产生的电磁场。真空介电常数为 $\varepsilon_0$，磁导率为 $\mu_0$，忽略重力。

I. $xy$ 平面上有中心为 O、内半径 $a$、外半径 $b$ 的圆环形薄板，均匀带有面密度为 $-\sigma\ (\sigma>0)$ 的电荷。

1. 求 $\mathrm P(0,0,z)$ 点的电位和电场。
2. 求 $z\gg b$ 时的电场近似式，简述物理意义。
3. 证明在 $a\to0,b\to\infty$ 的极限下，所得电场与均匀带电无限平面的电场相同。
4. 在远处 $\mathrm C(0,0,c)\ (c>0)$ 放置电荷 $-q\ (q>0)$、质量 $m$ 的粒子，赋予初速度 $\boldsymbol v_0=(0,0,-v_0)\ (v_0>0)$。求粒子最接近 O 时的 $z$ 坐标。$v_0$ 足够小，使运动中粒子位置 $z_c$ 始终满足 $z_c\gg b$。还要求 $t\to\infty$ 时的速度 $\boldsymbol v_c$。
5. 在 O 附近 $\mathrm D(0,0,d)\ (d\simeq0)$ 放置电荷 $q\ (q>0)$、质量 $m$ 的粒子，从静止释放。描述其运动并求周期。可忽略粒子的电磁辐射。

II. 真空中有内半径 $a$、外半径 $b$、厚度 $t$、截面为矩形的圆筒形磁性材料。

1. 若沿中心轴方向以恒定大小 $M$ 磁化，说明磁化电流流过的部位和方向。
2. 若沿圆周方向以恒定大小 $M$ 磁化，求材料内外的磁场强度与磁感应强度。
3. 在材料上均匀绕 $N$ 匝导线构成环形螺线管。通入电流 $I$ 时，求穿过材料截面的总磁通量。通电前材料不磁化，磁导率为 $\mu$，忽略漏磁。
4. 假设螺线管内的磁感应强度和磁化强度均匀，用平均周长 $2\pi(a+b)/2$ 求磁感应强度和磁化强度；并证明在 $a\gg b-a$ 时，与第 3 小问磁通量求出的磁感应强度一致。必要时可使用 $|x|\ll1$ 时 $\log(1+x)\simeq x$。

## **Kai**

### I

1. 電位の零点を無限遠に取る。半径 $r$、幅 $dr$ の円環が持つ電荷は $-2\pi\sigma r\,dr$ なので、

$$
\phi(z)=\int_a^b\frac{-2\pi\sigma r\,dr}{4\pi\varepsilon_0\sqrt{r^2+z^2}}
=\boxed{-\frac{\sigma}{2\varepsilon_0}
\left(\sqrt{b^2+z^2}-\sqrt{a^2+z^2}\right)}.
$$

対称性により軸方向成分だけが残り、

$$
\boxed{\boldsymbol E(z)=\frac{\sigma z}{2\varepsilon_0}
\left(\frac1{\sqrt{b^2+z^2}}-\frac1{\sqrt{a^2+z^2}}\right)\boldsymbol e_z}.
$$

2. $z\gg b$ で展開すると、

$$
\boxed{\boldsymbol E(z)\simeq
-\frac{\sigma(b^2-a^2)}{4\varepsilon_0z^2}\boldsymbol e_z}.
$$

これは全電荷 $Q=-\pi\sigma(b^2-a^2)$ を O に置いた点電荷の場である。

3. $z\ne0$ において、

$$
\boxed{\boldsymbol E\longrightarrow
-\frac{\sigma}{2\varepsilon_0}\operatorname{sgn}(z)\boldsymbol e_z}.
$$

大きさは $\sigma/(2\varepsilon_0)$ で、負に帯電した平面へ向かう。

4. $K=q\sigma(b^2-a^2)/(4\varepsilon_0)>0$ と置く。遠方での粒子の位置エネルギーは $K/z$ なので、エネルギー保存より、

$$
\frac12m v_0^2+\frac Kc=\frac K{z_{\min}}.
$$

従って、

$$
\boxed{z_{\min}=\left(\frac1c+\frac{2\varepsilon_0mv_0^2}
{q\sigma(b^2-a^2)}\right)^{-1}}.
$$

折り返した粒子は $+z$ 方向へ逃げ、

$$
\boxed{\boldsymbol v_c=
\left(0,0,\sqrt{v_0^2+\frac{q\sigma(b^2-a^2)}{2\varepsilon_0mc}}\right)}.
$$

5. $|z|\ll a$ で電場を一次まで展開すると、

$$
m\ddot z=-\frac{q\sigma}{2\varepsilon_0}
\left(\frac1a-\frac1b\right)z.
$$

粒子は $z$ 軸上で O を中心に単振動し、

$$
z(t)=d\cos\Omega t,\qquad
\Omega^2=\frac{q\sigma}{2\varepsilon_0m}\left(\frac1a-\frac1b\right),
\qquad
\boxed{T=2\pi\sqrt{\frac{2\varepsilon_0mab}{q\sigma(b-a)}}}.
$$

### II

1. 磁化を $\boldsymbol M=M\boldsymbol e_z$ とする。体積磁化電流は $\boldsymbol j_M=\nabla\times\boldsymbol M=0$、表面磁化電流は $\boldsymbol K_M=\boldsymbol M\times\boldsymbol n$ である。

$$
\boxed{\boldsymbol K_M=
\begin{cases}
M\boldsymbol e_\varphi,&\text{外側面},\\
-M\boldsymbol e_\varphi,&\text{内側面},\\
\boldsymbol0,&\text{上下の端面}.
\end{cases}}
$$

したがって $+z$ 側から見て外側面は反時計回り、内側面は時計回りに流れる。

2. $\boldsymbol M=M\boldsymbol e_\varphi$ は発散が零で、境界法線方向の成分も零である。自由電流がないため、無限遠で零となる磁場は $\boldsymbol H=0$。よって、

$$
\boxed{\boldsymbol H=\boldsymbol0\quad\text{（内外とも）}},\qquad
\boxed{\boldsymbol B=
\begin{cases}
\mu_0M\boldsymbol e_\varphi,&\text{磁性体内},\\
\boldsymbol0,&\text{磁性体外}.
\end{cases}}
$$

3. 半径 $r$ の円周上で Ampère の法則を用いると、

$$
H(r)=\frac{NI}{2\pi r},\qquad B(r)=\frac{\mu NI}{2\pi r}.
$$

断面を通る磁束は

$$
\boxed{\Phi=\int_a^bB(r)t\,dr
=\frac{\mu NIt}{2\pi}\log\frac ba}.
$$

4. 平均周長を用いると、

$$
\boxed{B\simeq\frac{\mu NI}{\pi(a+b)}},\qquad
\boxed{M\simeq\left(\frac\mu{\mu_0}-1\right)\frac{NI}{\pi(a+b)}}.
$$

$\Delta=b-a\ll a$ とすれば、

$$
\frac{\Phi}{t(b-a)}
=\frac{\mu NI}{2\pi\Delta}\log\left(1+\frac\Delta a\right)
\simeq\frac{\mu NI}{2\pi a}
\simeq\frac{\mu NI}{\pi(a+b)},
$$

となり一致する。

