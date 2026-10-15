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

真空中に置かれた半径 $a$ の円柱状誘電体に、中心軸方向の単位長さあたり $\lambda$ の正の固定電荷が分布している。円柱は半径に比べて十分に長く、円柱端部における電界の乱れは無視する。誘電体の比誘電率を $\varepsilon_r$、真空の誘電率を $\varepsilon_0$ とする。また、誘電体の透磁率は真空の透磁率 $\mu_0$ と等しいものとする。

(1) 円柱が静止している場合を考える。図 1.1 において、円柱の中心軸上の点 O から、中心軸に直交する方向に距離 $r$ の点 P をとる。

- (a) 固定電荷が円柱の表面にのみ一様に分布しているとき、点 P における電界強度を求めよ。$r>a$ と $0<r<a$ の場合についてそれぞれ求めること。
- (b) 固定電荷が円柱内に一様に分布しているとき、点 P における電界強度を求めよ。$r>a$ と $0<r<a$ の場合についてそれぞれ求めること。
- (c) 円柱の中心から距離 $r_1$ の点 $\mathrm P_1$ にある電荷量 $q$ の電荷を、図 1.2 のように円柱の中心から距離 $r_2$ の点 $\mathrm P_2$ に移動させた。この移動に必要な仕事を求めよ。ただし、$r_1>r_2>a$ とする。また、電荷の電荷量は十分に小さく、円柱の電荷による電界に影響を及ぼすことはない。

![図1.1、図1.2 円柱状誘電体と電荷の移動](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo-tech-ee/2018/em1-fig1-1-2.png)

(2) 固定電荷が表面にのみ一様に分布している円柱を、図 1.3 のようにその中心軸を中心にゆっくり回転させる。このとき、表面に固定された電荷の移動速度は光速よりも十分に小さい。

- (a) 一定の角速度 $\omega$ で回転すると、円柱表面には電流が流れていると見なせる。このとき、表面電流密度を求めよ。
- (b) 円柱が一定の角速度 $\omega$ で回転しているとき、円柱内部の磁束密度を求めよ。
- (c) 回転速度を $\omega=kt$ のように時間 $t$ とともに緩やかに増加させる。このとき、円柱の中心軸から距離 $r$ の点における電界強度を求めよ。ただし、$k$ は定数とし、$t>0$ および $r<a$ とする。

![図1.3 円柱の回転](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo-tech-ee/2018/em1-fig1-3.png)

図は東京工業大学 2019 年度大学院入試の原題より。

#### 题目描述

真空中放置半径为 $a$ 的长圆柱形电介质，其单位轴向长度的固定正电荷为 $\lambda$，相对介电常数为 $\varepsilon_r$，磁导率为 $\mu_0$。真空介电常数为 $\varepsilon_0$，忽略端部效应。

(1) 圆柱静止，点 P 到轴线的距离为 $r$。

- (a) 电荷仅均匀分布在圆柱表面，分别求 $r>a$ 和 $0<r<a$ 时的电场强度。
- (b) 电荷均匀分布在圆柱内部，分别求上述两区域的电场强度。
- (c) 将不影响原电场的微小电荷 $q$ 从距轴线 $r_1$ 的点移到距轴线 $r_2$ 的点，$r_1>r_2>a$，求所需的功。

(2) 电荷仅均匀分布在表面，圆柱绕中心轴缓慢旋转，表面电荷的速度远小于光速。

- (a) 角速度为常数 $\omega$，求表面电流密度。
- (b) 求圆柱内部的磁感应强度。
- (c) 若角速度随时间缓慢增加为 $\omega=kt$，求 $t>0$、$r<a$ 处的电场强度，其中 $k$ 为常数。

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
