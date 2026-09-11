---
sidebar_label: '2012年8月実施 物理学 第2問'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Electromagnetic-Wave
  - Physics.Electromagnetism.Skin-Effect
  - Physics.Electromagnetism.Dielectrics-and-Boundary-Conditions
---

# 東京大学 工学系研究科 2012年8月実施 物理学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

誘電体（誘電率 $\varepsilon_1$、透磁率 $\mu_1$、導電率 $\sigma_1=0$）から導体（$\varepsilon_2,\mu_2,\sigma_2$）へ電磁波が垂直入射する。境界面を $z=0$、導体を $z\ge0$ とする。電場は $x$ 成分 $E_x$、磁場は $y$ 成分 $H_y$ のみをもち、角周波数は $\omega$ である。入射波、透過波、反射波をそれぞれ $(E_{\rm IN},H_{\rm IN})$、$(E_T,H_T)$、$(E_R,H_R)$ と書き、

$$
E_{\rm IN}=E_1e^{i\omega t-ikz},
\qquad H_{\rm IN}=H_1e^{i\omega t-ikz}
$$

とする。$k$ は波数、$i$ は虚数単位である。$\varepsilon_1,\varepsilon_2,\mu_1,\mu_2,\sigma_2$ は実定数とし、

$$
a=\sqrt{\frac{\varepsilon_1}{\mu_1}},
\qquad b=\sqrt{\frac{\sigma_2}{\mu_2\omega}},
\qquad\eta=\frac ab
$$

と置く。次の式を用い、導出過程も記せ。

$$
\operatorname{rot}\boldsymbol H=\sigma\boldsymbol E+\varepsilon\frac{\partial\boldsymbol E}{\partial t},
\qquad
\operatorname{rot}\boldsymbol E=-\mu\frac{\partial\boldsymbol H}{\partial t},
$$

$$
\frac{\partial^2E_x}{\partial z^2}=\varepsilon\mu\frac{\partial^2E_x}{\partial t^2}+\mu\sigma\frac{\partial E_x}{\partial t},
\qquad
\frac{\partial^2H_y}{\partial z^2}=\varepsilon\mu\frac{\partial^2H_y}{\partial t^2}+\mu\sigma\frac{\partial H_y}{\partial t}.
$$

![良導体への垂直入射と反射・透過](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2013/kyotsu_201208_phys_2_waves_audited.svg)

### I

反射波の振幅を $E_3,H_3$ とする。導体では $\sigma_2\gg\varepsilon_2\omega$ として

$$
E_T=E_2e^{i\omega t-(\alpha+i\beta)z},
\qquad H_T=H_2e^{i\omega t-(\alpha+i\beta)z},
\qquad\alpha\simeq\beta\simeq\sqrt{\frac{\mu_2\sigma_2\omega}{2}}
$$

と近似する。

1. $H_1,H_3$ を $a,E_1,E_3$ で表せ。
2. 入射波の位相速度 $v$ を $\varepsilon_1,\mu_1$ で表せ。
3. $E_2,H_2$ の関係を導き、透過波の電場と磁場の位相差を求めよ。

### II

ポインティングベクトル $\boldsymbol S=\boldsymbol E\times\boldsymbol H$ の時間平均を $\overline{\boldsymbol S}$ とする。

1. 入射・反射波の時間平均の大きさ $|\overline{\boldsymbol S}_{\rm IN}|,|\overline{\boldsymbol S}_R|$ を $a,E_1,E_3$ で表せ。
2. 透過波の $|\overline{\boldsymbol S}_T|$ を $b,\alpha,E_2,z$ で表し、$\alpha$ の物理的意味を述べよ。
3. 反射率 $|\overline{\boldsymbol S}_R|/|\overline{\boldsymbol S}_{\rm IN}|$ と透過率を $\eta$ の関数として求めよ。

#### 题目描述

平面电磁波从无损介质 1（$\varepsilon_1,\mu_1,\sigma_1=0$）沿 $+z$ 方向垂直入射到导体 2（$\varepsilon_2,\mu_2,\sigma_2$），界面为 $z=0$，导体占据 $z\ge0$。电场只有 $E_x$，磁场只有 $H_y$，角频率为 $\omega$。入射波为

$$
E_{\rm IN}=E_1e^{i\omega t-ikz},\qquad H_{\rm IN}=H_1e^{i\omega t-ikz}.
$$

反射、透射场分别记为 $(E_R,H_R)$、$(E_T,H_T)$。所有材料参数均为实常数，定义

$$
a=\sqrt{\varepsilon_1/\mu_1},\qquad b=\sqrt{\sigma_2/(\mu_2\omega)},\qquad\eta=a/b.
$$

使用麦克斯韦方程 $\nabla\times\boldsymbol H=\sigma\boldsymbol E+\varepsilon\partial_t\boldsymbol E$、$\nabla\times\boldsymbol E=-\mu\partial_t\boldsymbol H$，以及题给的电报方程 $\partial_z^2E_x=\varepsilon\mu\partial_t^2E_x+\mu\sigma\partial_tE_x$（$H_y$ 同形）求解，并写出过程。

I. 反射波振幅为 $E_3,H_3$。在良导体近似 $\sigma_2\gg\varepsilon_2\omega$ 下，

$$
E_T=E_2e^{i\omega t-(\alpha+i\beta)z},\qquad H_T=H_2e^{i\omega t-(\alpha+i\beta)z},
\qquad\alpha\simeq\beta\simeq\sqrt{\mu_2\sigma_2\omega/2}.
$$

1. 用 $a,E_1,E_3$ 表示 $H_1,H_3$。
2. 求入射波的相速度。
3. 导出 $E_2,H_2$ 的关系，求透射电场与磁场的相位差。

II. 令 $\boldsymbol S=\boldsymbol E\times\boldsymbol H$，时间平均记为 $\overline{\boldsymbol S}$。

1. 用 $a,E_1,E_3$ 表示入射和反射能流密度的时间平均大小。
2. 用 $b,\alpha,E_2,z$ 表示透射能流密度的时间平均大小，并解释 $\alpha$ 的物理意义。
3. 求以 $\eta$ 表示的功率反射率和透射率。

## **Kai**

### I

#### I.1・I.2

$\partial_zE_x=-\mu_1\partial_tH_y$ を入射波と $e^{i\omega t+ikz}$ で進む反射波に適用すると

$$
\boxed{H_1=aE_1},
\qquad\boxed{H_3=-aE_3},
\qquad
\boxed{v=\frac\omega k=\frac1{\sqrt{\varepsilon_1\mu_1}}}.
$$

#### I.3

透過波については

$$
-(\alpha+i\beta)E_2=-i\mu_2\omega H_2,
\qquad
H_2=\frac{\beta-i\alpha}{\mu_2\omega}E_2.
$$

良導体近似から

$$
\boxed{H_2=\frac{b(1-i)}{\sqrt2}E_2=be^{-i\pi/4}E_2}.
$$

磁場は電場より位相が $\boxed{\pi/4}$ 遅れる。

### II

#### II.1

複素振幅による時間平均は $\overline S_z=\frac12\operatorname{Re}(EH^*)$ である。よって

$$
\boxed{|\overline{\boldsymbol S}_{\rm IN}|=\frac a2|E_1|^2},
\qquad
\boxed{|\overline{\boldsymbol S}_R|=\frac a2|E_3|^2}.
$$

反射の平均エネルギー流は $-z$ 向きである。

#### II.2

$$
\boxed{|\overline{\boldsymbol S}_T(z)|=\frac{b}{2\sqrt2}|E_2|^2e^{-2\alpha z}}.
$$

$\alpha$ は電場・磁場の振幅減衰定数であり、表皮深さは $\delta=1/\alpha$。エネルギー流は距離 $1/(2\alpha)$ で $1/e$ に減る。

#### II.3

$z=0$ で接線成分を連続にすると

$$
E_1+E_3=E_2,
\qquad a(E_1-E_3)=\frac{b(1-i)}{\sqrt2}E_2.
$$

$\zeta=(1-i)/\sqrt2$ と置いて解けば

$$
\frac{E_3}{E_1}=\frac{\eta-\zeta}{\eta+\zeta},
\qquad
\frac{E_2}{E_1}=\frac{2\eta}{\eta+\zeta}.
$$

したがって反射率 $\mathcal R$ と、界面から導体へ入る透過率 $\mathcal T$ は

$$
\boxed{\mathcal R=\frac{\eta^2-\sqrt2\eta+1}{\eta^2+\sqrt2\eta+1}},
\qquad
\boxed{\mathcal T=\frac{2\sqrt2\eta}{\eta^2+\sqrt2\eta+1}}.
$$

$\mathcal R+\mathcal T=1$ であり、深さ $z$ の能流比は $\mathcal T e^{-2\alpha z}$ となる。

