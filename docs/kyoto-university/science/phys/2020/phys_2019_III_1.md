---
sidebar_label: "2020年度 III-1（統計力学）"
tags:
  - Kyoto-University
  - Physics.Thermodynamics.Canonical-Partition-Function
  - Physics.Thermodynamics.Virial-Expansion
  - Physics.Electromagnetism.Electric-Dipole-Potential
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2020年度 問題III-1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

体積 $V$ の箱に、質量 $m$、大きさ $\mu$ の電気双極子モーメントを持つ粒子が $N$ 個ある。$\boldsymbol\mu_i=\mu(\cos\varphi_i\sin\theta_i,\sin\varphi_i\sin\theta_i,\cos\theta_i)$。正の $z$ 方向の外部電場 $E$ の下で

$$
\mathcal H=\sum_i\left(\frac{|\boldsymbol p_i|^2}{2m}-E\mu\cos\theta_i\right)+\sum_{i<j}U(\boldsymbol r_i,\boldsymbol\mu_i,\boldsymbol r_j,\boldsymbol\mu_j).
$$

回転の慣性モーメントをゼロとして回転運動エネルギーを無視し、温度 $T$ の平衡状態を考える。

1. 相互作用を無視するときの圧力 $p_0$ を求めよ。
2. 双極子の極角が $\theta$ と $\theta+d\theta$ の間にある確率を $2\pi f(\theta)\sin\theta\,d\theta$ と書く。$f$ を求めよ。
3. 単位体積あたりの分極 $M=N\mu\langle\cos\theta\rangle/V$ を求めよ。
4. 微弱電場における誘電率 $\varepsilon=\varepsilon_0+M/E$ を求めよ。$\coth x=1/x+x/3+O(x^3)$ を用いてよい。

以下では外場をゼロとする。$\boldsymbol R=\boldsymbol r_2-\boldsymbol r_1$、$R=|\boldsymbol R|$、$\hat{\boldsymbol R}=\boldsymbol R/R$、$C=1/(4\pi\varepsilon_0)$ とし

$$
U=-\frac C{R^3}\{3(\boldsymbol\mu_1\cdot\hat{\boldsymbol R})(\boldsymbol\mu_2\cdot\hat{\boldsymbol R})-\boldsymbol\mu_1\cdot\boldsymbol\mu_2\}.
$$

粒子2が粒子1に及ぼす力は $\boldsymbol F=-\partial U/\partial\boldsymbol r_1$ である。$d\Omega_i=\sin\theta_i\,d\theta_i\,d\varphi_i$ とし

$$
e^{-U_{\rm eff}(\boldsymbol R)/(k_BT)}=\int d\Omega_1d\Omega_2\,e^{-U/(k_BT)}
$$

で実効ポテンシャルを定義する。

5. 位置を固定したときの双極子方向の確率密度 $P(\boldsymbol\mu_1,\boldsymbol\mu_2\mid\boldsymbol r_1,\boldsymbol r_2)$ を $U_{\rm eff},U,k_BT$ で表せ。
6. 平均力が $\langle\boldsymbol F\rangle=-\partial U_{\rm eff}/\partial\boldsymbol r_1$ であることを示せ。
7. $k_BT\gg C\mu^2/R^3$ のとき、主要項を $\langle\boldsymbol F\rangle=-AR^{-\alpha}\hat{\boldsymbol R}$ と書き、$A,\alpha$ を求めよ。中括弧内を $D$ とすると、方向の一様平均は $\langle D\rangle_0=0$、$\langle D^2\rangle_0=2\mu^4/3$ を用いてよい。
8. $R\leq d$ では無限大、$R>d$ では $U_{\rm eff}$ となる $U_{\rm tot}$ を考える。粒子数密度が十分小さいとき

$$
\frac{pV}{Nk_BT}=1-\frac N{2V}\int d^3R\left[e^{-[U_{\rm tot}(R)-U_{\rm tot}(\infty)]/(k_BT)}-1\right]
$$

から圧力を求めよ。$d>0$ とする。

#### 题目描述

体积 $V$ 内有 $N$ 个大小固定为 $\mu$ 的电偶极子。忽略旋转动能，在温度 $T$ 的平衡态中，外场能为 $-E\mu\cos\theta$。

1. 无相互作用时求压强。
2. 求偶极方向的正则分布密度。
3. 求单位体积分极。
4. 求弱电场介电常数。

随后撤去外场，采用上式偶极相互作用，位置差特别定义为 $\boldsymbol R=\boldsymbol r_2-\boldsymbol r_1$，而力为粒子2对粒子1的力。

5. 求固定位置下的方向联合概率。
6. 证明平均力来自对数配分函数定义的有效势。
7. 在高温弱相互作用极限求力的幂律系数与指数，注意给定向量方向。
8. 在半径 $d$ 内施加硬核，结合题给第二维里展开求压强。

## **Kai**

### (1)–(4)

(1) 配置積分は $V^N$ に比例するので $\boxed{p_0=Nk_BT/V}$。

(2) $x=\mu E/(k_BT)$ とおくと、$\int e^{x\cos\theta}d\Omega=4\pi\sinh x/x$。従って

$$
\boxed{f(\theta)=\frac{x e^{x\cos\theta}}{4\pi\sinh x}.}
$$

$x=0$ では連続な極限 $f=1/(4\pi)$ を取る。

(3) 分配関数の対数微分から $\langle\cos\theta\rangle=\coth x-1/x$。よって

$$
\boxed{M=\frac{N\mu}{V}\left(\coth x-\frac1x\right).}
$$

(4) $M\simeq N\mu^2E/(3Vk_BT)$ より

$$
\boxed{\varepsilon=\varepsilon_0+\frac{N\mu^2}{3Vk_BT}.}
$$

### (5)・(6)

(5) 方向の積分で規格化すると

$$
\boxed{P=e^{(U_{\rm eff}-U)/(k_BT)}.}
$$

(6) $Z_\Omega=e^{-U_{\rm eff}/(k_BT)}$ を位置で微分して

$$
-\frac{\partial U_{\rm eff}}{\partial\boldsymbol r_1}
=\frac{\int d\Omega_1d\Omega_2(-\partial_{\boldsymbol r_1}U)e^{-U/(k_BT)}}{Z_\Omega}
=\boxed{\langle\boldsymbol F\rangle}.
$$

### (7)

高温展開と与えられた方向平均から

$$
Z_\Omega=(4\pi)^2\left[1+\frac{C^2\mu^4}{3(k_BT)^2R^6}+\cdots\right],\qquad
U_{\rm eff}(R)=U_{\rm eff}(\infty)-\frac{C^2\mu^4}{3k_BTR^6}+\cdots.
$$

$\partial R/\partial\boldsymbol r_1=-\hat{\boldsymbol R}$ であることに注意すると

$$
\boxed{\langle\boldsymbol F\rangle=\frac{2C^2\mu^4}{k_BT R^7}\hat{\boldsymbol R}+\cdots.}
$$

粒子1は粒子2へ引かれる。問題の表記 $-AR^{-\alpha}\hat{\boldsymbol R}$ に合わせると

$$
\boxed{\alpha=7,\qquad A=-\frac{2C^2\mu^4}{k_BT}.}
$$

### (8)

硬核の内側で被積分関数は $-1$。外側では高温の主要項として $C^2\mu^4/[3(k_BT)^2R^6]$ を用いる。従って

$$
\int d^3R(\cdots)=-\frac{4\pi d^3}{3}+\frac{4\pi C^2\mu^4}{9(k_BT)^2d^3},
$$

$$
\boxed{p\simeq\frac{Nk_BT}{V}\left[1+\frac{2\pi Nd^3}{3V}
-\frac{2\pi NC^2\mu^4}{9V(k_BT)^2d^3}\right].}
$$

この近似は低密度に加え、接触距離でも $C\mu^2/(k_BTd^3)\ll1$ を要する。

## **Reference**

- [京都大学公式原題（2020年度、PDF 18–19ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/R2.pdf)
