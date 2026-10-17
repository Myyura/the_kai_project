---
sidebar_label: "2018年8月実施 電磁気学1"
tags:
  - institute-of-science-tokyo
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Dielectrics-and-Boundary-Conditions
  - Physics.Electromagnetism.Ampere-Law
  - Physics.Electromagnetism.Electromagnetic-Induction-and-Inductance
---
# 東京工業大学 工学院 電気電子系 2018年8月実施 電磁気学1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

真空中に置かれた半径 $a$ の円柱状誘電体に、中心軸方向の単位長さあたり $\lambda$ の正の固定電荷が分布している。円柱は半径に比べて十分に長く、円柱端部における電界の乱れは無視する。誘電体の比誘電率を $\varepsilon_r$、真空の誘電率は $\varepsilon_0$ とする。また、誘電体の透磁率は真空の透磁率 $\mu_0$ と等しいものとする。

1) 円柱が静止している場合を考える。図1.1において、円柱の中心軸上の点 O から、中心軸に直交する方向に距離 $r$ の点 P をとる。

a) 固定電荷が円柱の表面にのみ一様に分布しているとき、点 P における電界強度を求めよ。$r>a$ と $0<r<a$ の場合についてそれぞれ求めること。

b) 固定電荷が円柱内に一様に分布しているとき、点 P における電界強度を求めよ。$r>a$ と $0<r<a$ の場合についてそれぞれ求めること。

c) 円柱の中心から距離 $r_1$ の点 $\mathrm P_1$ にある電荷量 $q$ の電荷を、図1.2のように円柱の中心から距離 $r_2$ の点 $\mathrm P_2$ に移動させた。この移動に必要な仕事を求めよ。ただし、$r_1>r_2>a$ とする。また、電荷の電荷量は十分に小さく、円柱の電荷による電界に影響を及ぼすことはない。

![図1.1、図1.2 円柱状誘電体と電荷の移動](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2019/ee_201808_em1-fig1-1-2.png)

![図1.3 円柱の回転](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2019/ee_201808_em1-fig1-3.png)

2) 固定電荷が表面にのみ一様に分布している円柱を、図1.3のようにその中心軸を中心にゆっくり回転させる。このとき、表面に固定された電荷の移動速度は光速よりも十分に小さい。

a) 一定の角速度 $\omega$ で回転すると、円柱表面には電流が流れていると見なせる。このとき、表面電流密度を求めよ。

b) 円柱が一定の角速度 $\omega$ で回転しているとき、円柱内部の磁束密度を求めよ。

c) 回転速度を $\omega=kt$ のように時間 $t$ とともに緩やかに増加させる。このとき、円柱の中心軸から距離 $r$ の点における電界強度を求めよ。ただし、$k$ は定数とし、$t>0$ および $r<a$ とする。

#### 题目描述

真空中放置一个半径为 $a$ 的圆柱形介质，其中沿中心轴方向每单位长度分布有电荷量为 $\lambda$ 的正固定电荷。圆柱长度远大于半径，忽略圆柱端部的电场畸变。介质的相对介电常数为 $\varepsilon_r$，真空介电常数为 $\varepsilon_0$；介质磁导率等于真空磁导率 $\mu_0$。

1) 考虑圆柱静止的情况。如图1.1，从中心轴上的 O 点沿垂直于中心轴的方向取距离为 $r$ 的 P 点。

a) 固定电荷仅在圆柱表面均匀分布时，求 P 点的电场强度，分别讨论 $r>a$ 和 $0<r<a$。

b) 固定电荷在圆柱内部均匀分布时，求 P 点的电场强度，分别讨论 $r>a$ 和 $0<r<a$。

c) 如图1.2，将电荷量为 $q$ 的电荷从距圆柱中心 $r_1$ 的 $\mathrm P_1$ 点移动到距离为 $r_2$ 的 $\mathrm P_2$ 点。求这一移动所需的功，其中 $r_1>r_2>a$。该电荷量足够小，不影响圆柱电荷所产生的电场。

2) 如图1.3，让固定电荷仅均匀分布在表面的圆柱绕中心轴缓慢旋转。固定在表面的电荷运动速度远小于光速。

a) 当以恒定角速度 $\omega$ 旋转时，可视为圆柱表面有电流流动，求表面电流密度。

b) 当圆柱以恒定角速度 $\omega$ 旋转时，求圆柱内部的磁通密度。

c) 令旋转角速度随时间 $t$ 缓慢增加，满足 $\omega=kt$。求距圆柱中心轴 $r$ 处的电场强度，其中 $k$ 为常数、$t>0$ 且 $r<a$。

## **Kai**

円柱軸を $z$ 軸とし、回転方向を $\boldsymbol e_\phi$、角速度ベクトルの方向を $\boldsymbol e_z$ とする。

### (1)

#### (a)

長さ $\ell$、半径 $r$ の同軸ガウス面に対し、$2\pi r\ell D_r$ は内部の固定電荷に等しい。したがって、

$$
\boxed{\boldsymbol E(r)=
\begin{cases}
\boldsymbol 0,&0<r<a,\\
\dfrac{\lambda}{2\pi\varepsilon_0r}\boldsymbol e_r,&r>a.
\end{cases}}
$$

#### (b)

体積電荷密度は $\rho=\lambda/(\pi a^2)$ である。$r<a$ ではガウス面内の電荷が $\lambda\ell r^2/a^2$ となるので、

$$
\boxed{\boldsymbol E(r)=
\begin{cases}
\dfrac{\lambda r}{2\pi\varepsilon_0\varepsilon_r a^2}\boldsymbol e_r,&0<r<a,\\
\dfrac{\lambda}{2\pi\varepsilon_0r}\boldsymbol e_r,&r>a.
\end{cases}}
$$

#### (c)

外力のする仕事は電位エネルギーの増加であるから、

$$
W=-q\int_{r_1}^{r_2}\frac{\lambda}{2\pi\varepsilon_0r}\,dr
=\boxed{\frac{q\lambda}{2\pi\varepsilon_0}\ln\frac{r_1}{r_2}}.
$$

### (2)

#### (a)

表面電荷密度 $\sigma=\lambda/(2\pi a)$、速度 $v=a\omega$ より、

$$
\boxed{\boldsymbol K=\sigma v\boldsymbol e_\phi
=\frac{\lambda\omega}{2\pi}\boldsymbol e_\phi}.
$$

#### (b)

無限長ソレノイドと同様に、外部磁界は $0$ で、内部ではアンペールの法則から $B=\mu_0K$ となる。よって、

$$
\boxed{\boldsymbol B=\frac{\mu_0\lambda\omega}{2\pi}\boldsymbol e_z}.
$$

#### (c)

準静的近似で、半径 $r<a$ の円周にファラデーの法則を適用すると、

$$
2\pi rE_\phi=-\frac{d}{dt}(\pi r^2B)
=-\frac{\mu_0\lambda k r^2}{2}.
$$

内部の静電界は $0$ なので、

$$
\boxed{\boldsymbol E=-\frac{\mu_0\lambda kr}{4\pi}\boldsymbol e_\phi}.
$$

$k>0$ なら回転とは逆向きの電界である。
