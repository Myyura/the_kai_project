---
sidebar_label: "2018年8月実施 電磁気学2"
tags:
  - institute-of-science-tokyo
  - Physics.Electromagnetism.Method-of-Images
  - Physics.Electromagnetism.Electric-Dipole-Potential
  - Physics.Electromagnetism.Electrostatic-Force
  - Physics.Electromagnetism.Capacitance-and-Electrostatic-Energy
---
# 東京工業大学 工学院 電気電子系 2018年8月実施 電磁気学2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

電気映像法に関する以下の問に答えよ。導体や電荷は全て真空中にあり、真空の誘電率を $\varepsilon_0$ とする。導体端面における電界の乱れは無視する。原点を $\mathrm O(0,0,0)$ とする。

1) 図2.1のように、接地された無限に広い平面状の完全導体から距離 $h$ の位置 $(h,0,0)$ に、正の電荷量 $q$ を持つ点電荷を置く。

a) 映像電荷の位置と電荷量を示せ。

b) 点電荷に働く力の方向と大きさを求めよ。

c) $x>0$ の任意の点における電位は、真電荷による電位と映像電荷による電位の和となる。点 $(x,y,0)$ における電位を求めよ。

d) 導体表面に誘起される電荷は、導体表面における電界強度から求めることができる。原点 $\mathrm O(0,0,0)$ から距離 $r$ の位置における面電荷密度を求めよ。

![図2.1 接地導体平面と点電荷](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2019/ee_201808_em2-fig2-1.png)

![図2.2 自由空間の双極子、図2.3 接地導体平面に平行な双極子](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2019/ee_201808_em2-fig2-2-3.png)

2) 図2.2のように、2点 $\mathrm A(0,h,0)$ と $\mathrm B(0,-h,0)$ にそれぞれ $+q$ と $-q$ の電荷が置かれた電気双極子を考える。

a) 点 $\mathrm P(x,y,0)$ の電位は、

$$
V=\frac{qh}{2\pi\varepsilon_0}\cdot\frac y{r^3}
$$

となることを示せ。$r$ は双極子の中心から点 P までの距離であり、$r=\sqrt{x^2+y^2}$ である。また、$r\gg2h$ として、$h$ に関する二次の項は無視してよい。また、$\delta$ が十分に小さいときに成り立つ近似式、$(1+\delta)^n\simeq1+n\delta$ を用いてよい。

b) 点 P が $x$ 軸上にあるとき、点 $\mathrm P(x,0,0)$ における $x$ 方向および $y$ 方向の電界を求めよ。

3) $+q$ と $-q$ の電荷が $2h$ 離れて置かれた電気双極子を、図2.3のように完全導体表面から距離 $r$ の位置に置く。このとき、双極子には導体表面に近づく向きに力が働く。ただし、$r\gg2h$ とする。

a) 電界 $\boldsymbol E$ の中に置かれた双極子は $W=-\boldsymbol P\cdot\boldsymbol E$ で与えられるエネルギーを持つ。図2.3のように置かれた双極子が持つエネルギーを求めよ。ここで、$\boldsymbol P$ は双極子モーメントと呼ばれ、$-q$ の電荷から $+q$ の電荷に向かう位置ベクトルを $\boldsymbol l$ とすると、$\boldsymbol P=q\boldsymbol l$ で表される。

b) 双極子に働く力の大きさを求めよ。

#### 题目描述

回答以下有关电像法的问题。导体和电荷均位于真空中，真空介电常数为 $\varepsilon_0$。忽略导体端面的电场畸变，以 $\mathrm O(0,0,0)$ 为原点。

1) 如图2.1，在距接地的无限大平面理想导体 $h$ 的位置 $(h,0,0)$，放置电荷量为正值 $q$ 的点电荷。

a) 给出镜像电荷的位置和电荷量。

b) 求点电荷所受力的方向和大小。

c) $x>0$ 的任意点的电势为真实电荷和镜像电荷各自产生的电势之和，求点 $(x,y,0)$ 的电势。

d) 导体表面的感应电荷可由导体表面电场强度求得。求表面上距原点 $\mathrm O(0,0,0)$ 为 $r$ 处的面电荷密度。

2) 如图2.2，在 $\mathrm A(0,h,0)$ 和 $\mathrm B(0,-h,0)$ 两点分别放置 $+q,-q$ 电荷，构成电偶极子。

a) 证明点 $\mathrm P(x,y,0)$ 的电势为

$$
V=\frac{qh}{2\pi\varepsilon_0}\cdot\frac y{r^3}.
$$

其中 $r$ 为偶极子中心到 P 点的距离，$r=\sqrt{x^2+y^2}$。设 $r\gg2h$，可忽略关于 $h$ 的二次项，并可使用 $\delta$ 足够小时成立的近似式 $(1+\delta)^n\simeq1+n\delta$。

b) 当 P 点位于 $x$ 轴上时，求 $\mathrm P(x,0,0)$ 处的 $x$、$y$ 方向电场。

3) 将 $+q,-q$ 两电荷相距 $2h$ 的电偶极子按图2.3放在距理想导体表面 $r$ 的位置。此时偶极子受到指向导体表面的力。假设 $r\gg2h$。

a) 位于电场 $\boldsymbol E$ 中的电偶极子具有能量 $W=-\boldsymbol P\cdot\boldsymbol E$。求图2.3所示偶极子的能量。其中 $\boldsymbol P$ 称为偶极矩，若从 $-q$ 指向 $+q$ 的位置向量为 $\boldsymbol l$，则 $\boldsymbol P=q\boldsymbol l$。

b) 求偶极子所受力的大小。

## **Kai**

### (1)

#### (a)

接地面 $x=0$ の電位を $0$ にするため、

$$
\boxed{\text{位置 }(-h,0,0),\qquad\text{電荷量 }-q}
$$

の映像電荷を置く。

#### (b)

実電荷と映像電荷の距離は $2h$ なので、

$$
\boxed{\boldsymbol F=-\frac{q^2}{16\pi\varepsilon_0h^2}\boldsymbol e_x}.
$$

#### (c)

無限遠の電位を $0$ とすると、

$$
\boxed{V(x,y,0)=\frac{q}{4\pi\varepsilon_0}
\left[\frac1{\sqrt{(x-h)^2+y^2}}
-\frac1{\sqrt{(x+h)^2+y^2}}\right]}.
$$

#### (d)

導体から真空に向かう法線は $\boldsymbol e_x$ である。$x=0$、$y^2+z^2=r^2$ において、

$$
E_x=-\left.\frac{\partial V}{\partial x}\right|_{x=0}
=-\frac{qh}{2\pi\varepsilon_0(h^2+r^2)^{3/2}}.
$$

よって、

$$
\boxed{\sigma(r)=\varepsilon_0E_x
=-\frac{qh}{2\pi(h^2+r^2)^{3/2}}}.
$$

### (2)

#### (a)

二つの点電荷による電位を加え、$h/r$ の一次まで展開する。

$$
\begin{aligned}
V&=\frac{q}{4\pi\varepsilon_0}
\left[\frac1{\sqrt{r^2-2yh+h^2}}-\frac1{\sqrt{r^2+2yh+h^2}}\right]\\
&\simeq\frac{q}{4\pi\varepsilon_0r}
\left[\left(1+\frac{yh}{r^2}\right)-\left(1-\frac{yh}{r^2}\right)\right]\\
&=\boxed{\frac{qh}{2\pi\varepsilon_0}\frac{y}{r^3}}.
\end{aligned}
$$

#### (b)

$y=0$ では対称性から $E_x=0$。電位を $y$ で微分してから $y=0$ とおくと、

$$
\boxed{E_x=0,\qquad E_y\simeq-\frac{qh}{2\pi\varepsilon_0|x|^3}}.
$$

有限の電荷間隔に対する厳密式は $E_y=-qh/[2\pi\varepsilon_0(x^2+h^2)^{3/2}]$ である。

### (3)

#### (a)

実双極子のモーメントを $\boldsymbol P=P\boldsymbol e_y$、$P=2qh$ とする。中心 $(-r,0,0)$ に置く映像双極子は $-P\boldsymbol e_y$ であり、実双極子の中心に作る電界は

$$
\boldsymbol E_{\mathrm{im}}=\frac{P}{4\pi\varepsilon_0(2r)^3}\boldsymbol e_y.
$$

したがって、設問の $W=-\boldsymbol P\cdot\boldsymbol E$ による相互作用エネルギーは

$$
\boxed{W=-\frac{P^2}{32\pi\varepsilon_0r^3}
=-\frac{q^2h^2}{8\pi\varepsilon_0r^3}}.
$$

導体の誘導電荷まで含めて、実双極子を無限遠から運ぶ仕事に対応する系のエネルギーは、誘導電荷の形成を考慮して

$$
\boxed{U=\frac12W=-\frac{q^2h^2}{16\pi\varepsilon_0r^3}}.
$$

#### (b)

実電荷二つに働く映像電荷からのクーロン力を直接加えると、

$$
F_x=\frac{q^2}{4\pi\varepsilon_0}
\left[-\frac1{2r^2}+\frac{r}{2(r^2+h^2)^{3/2}}\right]
\simeq-\frac{3q^2h^2}{16\pi\varepsilon_0r^4}.
$$

したがって、導体に向かう吸引力の大きさは

$$
\boxed{|\boldsymbol F|=\frac{3q^2h^2}{16\pi\varepsilon_0r^4}}.
$$

これは $F_x=-dU/dr$ と一致する。$W$ を使う場合は、映像双極子の位置を固定したまま実双極子の座標で微分する。映像位置も $-r$ として動かした $W(r)$ の全微分は、力を二重に数える。
