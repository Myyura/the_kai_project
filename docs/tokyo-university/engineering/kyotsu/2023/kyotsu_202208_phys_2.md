---
sidebar_label: '2022年8月実施 物理学2'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Electrostatic-Shielding
  - Physics.Electromagnetism.Electromagnetic-Wave
  - Physics.Electromagnetism.Dielectrics-and-Boundary-Conditions
---

# 東京大学 工学系研究科 2022年8月実施 物理学2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. 真空中の半径 $a$、長さ無限の円柱領域に、一様な体積電荷密度 $\rho>0$ で電荷が分布している。真空の誘電率を $\varepsilon_0$ とする。

1. 中心軸から距離 $r$ の電場ベクトル $\boldsymbol E(r)$ の大きさと向きを、円柱の内外それぞれについて求めよ。
2. この円柱を、内半径 $2a$、外半径 $3a$ の無限長の金属円筒で同心に囲む。金属円筒は全体として中性で、円柱内部の電荷分布に影響しないものとする。金属円筒の内面に誘起される面電荷密度 $\sigma$ を求めよ。
3. 2 の場合、中心軸から $5a$ の位置での電場の大きさを求めよ。
4. 金属円筒がない場合とある場合の、中心軸から $5a$ での電位をそれぞれ $V_1,V_2$ とする。中心軸の電位を零とし、$\Delta V=V_1-V_2$ を求めよ。

II. 真空（$\varepsilon_0,\mu_0$）を速さ $c_0$ で $+z$ 方向へ進む平面電磁波が、誘電率 $4\varepsilon_0$、透磁率 $\mu_0$ の一様な絶縁体に垂直入射する。境界面は $z=0$、媒質は $z\ge0$ を占める。入射波の波数ベクトルを $\boldsymbol k_0=k_0\boldsymbol e_z$、電場を

$$
\boldsymbol E_0=(E'_0\cos[k_0(z-c_0t)],0,0)
$$

とし、$E'_0$ は実定数とする。

1. Maxwell 方程式を用い、磁場が $\boldsymbol H_0=(0,E'_0\cos[k_0(z-c_0t)]/(\mu_0c_0),0)$ であることを示せ。
2. Maxwell 方程式から $c_0=1/\sqrt{\varepsilon_0\mu_0}$ を示せ。

透過波の電場、磁場、波数ベクトル、速さを $\boldsymbol E_T,\boldsymbol H_T,\boldsymbol k_T,c_T$、反射波を $\boldsymbol E_R,\boldsymbol H_R,\boldsymbol k_R,c_R$ とする。$\boldsymbol k_R=-\boldsymbol k_0$、$c_R=c_0$、$c_T=c_0/2$ である。境界面で $\boldsymbol E,\boldsymbol H$ の接線成分がそれぞれ連続であることを用いて、次に答えよ。

3. $\boldsymbol k_T$ を $\boldsymbol k_0$ で表せ。
4. $\boldsymbol E_T,\boldsymbol E_R,\boldsymbol H_T,\boldsymbol H_R$ を求めよ。
5. 各波の Poynting ベクトル $\boldsymbol S=\boldsymbol E\times\boldsymbol H$、すなわち $\boldsymbol S_0,\boldsymbol S_T,\boldsymbol S_R$ を求めよ。
6. 透過率 $T=|\boldsymbol S_T|_{\rm ave}/|\boldsymbol S_0|_{\rm ave}$、反射率 $R=|\boldsymbol S_R|_{\rm ave}/|\boldsymbol S_0|_{\rm ave}$ を求めよ。添字 ave は時間平均を表す。
![帯電円柱と金属円筒、および電磁波の垂直入射](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2023/kyotsu_202208_phys_2_fields_audited.svg)

#### 题目描述

I. 真空中半径为 $a$、无限长的圆柱区域内，均匀分布体电荷密度 $\rho>0$，真空介电常数为 $\varepsilon_0$。

1. 求距中心轴 $r$ 处的电场大小和方向，区分柱内、柱外。
2. 在外面同轴套上内半径 $2a$、外半径 $3a$ 的无限长金属圆筒。金属整体中性，不影响原圆柱电荷分布。求金属内表面的感应面电荷密度 $\sigma$。
3. 在 2 的条件下求 $r=5a$ 处电场大小。
4. 以轴上电势为零，无金属圆筒和有金属圆筒时 $r=5a$ 处电势分别为 $V_1,V_2$。求 $\Delta V=V_1-V_2$。

II. 真空中沿 $+z$ 以速度 $c_0$ 传播的平面波，垂直入射到介电常数 $4\varepsilon_0$、磁导率 $\mu_0$ 的均匀绝缘介质。界面为 $z=0$，介质占据 $z\ge0$。入射波矢为 $\boldsymbol k_0=k_0\boldsymbol e_z$，电场为 $\boldsymbol E_0=(E'_0\cos[k_0(z-c_0t)],0,0)$，其中 $E'_0$ 是实常数。

1. 用 Maxwell 方程证明 $\boldsymbol H_0=(0,E'_0\cos[k_0(z-c_0t)]/(\mu_0c_0),0)$。
2. 证明 $c_0=1/\sqrt{\varepsilon_0\mu_0}$。

透射波的电场、磁场、波矢、速度分别记为 $\boldsymbol E_T,\boldsymbol H_T,\boldsymbol k_T,c_T$，反射波相应记为下标 R。已知 $\boldsymbol k_R=-\boldsymbol k_0$、$c_R=c_0$、$c_T=c_0/2$。利用界面处电场和磁场的切向分量连续：

3. 用 $\boldsymbol k_0$ 表示 $\boldsymbol k_T$。
4. 求透射与反射波的全部电场、磁场矢量。
5. 求三种波的 Poynting 矢量 $\boldsymbol S=\boldsymbol E\times\boldsymbol H$。
6. 求透射率 $T=\langle|\boldsymbol S_T|\rangle/\langle|\boldsymbol S_0|\rangle$ 与反射率 $R=\langle|\boldsymbol S_R|\rangle/\langle|\boldsymbol S_0|\rangle$，尖括号表示时间平均。

## **Kai**

### I.

1. 長さ $\ell$、半径 $r$ の円筒面に Gauss の法則を用いると

$$
2\pi r\ell E(r)=\frac{\rho\pi\ell}{\varepsilon_0}\min(r^2,a^2).
$$

したがって電場は径方向外向きで

$$
\boxed{\boldsymbol E(r)=\begin{cases}
\dfrac{\rho r}{2\varepsilon_0}\boldsymbol e_r,&0\le r\le a,\\
\dfrac{\rho a^2}{2\varepsilon_0r}\boldsymbol e_r,&r>a.
\end{cases}}
$$

2. 金属内部の電場が零となる条件から、単位長さあたりの包有電荷は $\rho\pi a^2+4\pi a\sigma=0$。よって

$$
\boxed{\sigma=-\frac{\rho a}{4}}.
$$

3. 金属の全電荷は零なので外部での電場は変わらず

$$
\boxed{E(5a)=\frac{\rho a}{10\varepsilon_0}}.
$$

4. 金属の有無による電場の差は $2a<r<3a$ の区間だけである。よって

$$
\boxed{V_1-V_2=-\int_{2a}^{3a}\frac{\rho a^2}{2\varepsilon_0r}\,dr
=-\frac{\rho a^2}{2\varepsilon_0}\log\frac32}.
$$

### II.1–2

Faraday の法則の $y$ 成分は $\partial_zE_{0x}=-\mu_0\partial_tH_{0y}$。これを積分して、入射波と同じ位相の振動磁場は

$$
\boxed{\boldsymbol H_0=\frac{E'_0}{\mu_0c_0}\cos[k_0(z-c_0t)]\boldsymbol e_y}.
$$

Ampère–Maxwell の法則の $x$ 成分 $-\partial_zH_{0y}=\varepsilon_0\partial_tE_{0x}$ に代入すると、$1/(\mu_0c_0)=\varepsilon_0c_0$。したがって

$$
\boxed{c_0=\frac1{\sqrt{\varepsilon_0\mu_0}}}.
$$

### II.3–4

境界条件が全時刻で成立するため、三つの波の角振動数は等しい。$k_Tc_T=k_0c_0$ より

$$
\boxed{\boldsymbol k_T=2\boldsymbol k_0}.
$$

$Z_0=\mu_0c_0$、$Z_T=Z_0/2$ とし、電場の符号付き振幅を $E'_R,E'_T$ とする。接線成分の連続条件は

$$
E'_0+E'_R=E'_T,\qquad
\frac{E'_0-E'_R}{Z_0}=\frac{E'_T}{Z_T}.
$$

よって $E'_R=-E'_0/3,E'_T=2E'_0/3$。位相を

$$
\phi_0=k_0z-k_0c_0t,\quad
\phi_T=2k_0z-k_0c_0t,\quad
\phi_R=k_0z+k_0c_0t
$$

とおくと

$$
\boxed{\begin{aligned}
\boldsymbol E_T&=\frac{2E'_0}{3}\cos\phi_T\,\boldsymbol e_x,&
\boldsymbol H_T&=\frac{4E'_0}{3Z_0}\cos\phi_T\,\boldsymbol e_y,\\
\boldsymbol E_R&=-\frac{E'_0}{3}\cos\phi_R\,\boldsymbol e_x,&
\boldsymbol H_R&=\frac{E'_0}{3Z_0}\cos\phi_R\,\boldsymbol e_y.
\end{aligned}}
$$

### II.5–6

外積をとれば

$$
\boxed{\begin{aligned}
\boldsymbol S_0&=\frac{(E'_0)^2}{Z_0}\cos^2\phi_0\,\boldsymbol e_z,\\
\boldsymbol S_T&=\frac{8(E'_0)^2}{9Z_0}\cos^2\phi_T\,\boldsymbol e_z,\\
\boldsymbol S_R&=-\frac{(E'_0)^2}{9Z_0}\cos^2\phi_R\,\boldsymbol e_z.
\end{aligned}}
$$

$\langle\cos^2\phi\rangle=1/2$ より

$$
\boxed{T=\frac89,\qquad R=\frac19},\qquad T+R=1.
$$

