---
sidebar_label: "2021年度 II-3（統計熱力学）"
tags:
  - Kyoto-University
  - Physics.Thermodynamics.Canonical-Partition-Function
  - Physics.Thermodynamics.Ideal-Gas-Entropy-and-Heat-Capacities
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2021年度 II-3

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

質量 $m$ の同種単原子分子からなる古典理想気体が、体積 $V$ の箱内で温度 $T$ の熱平衡にある。粒子数を $N$、ボルツマン定数を $k$ とする。

$$
H=\sum_{a=1}^N\frac{\mathbf p_a^2}{2m},\qquad
Z=e^{-F/(kT)}=\frac1{N!}\int\prod_{a=1}^N\frac{d^3\mathbf x_a\,d^3\mathbf p_a}{(2\pi\hbar)^3}e^{-H/(kT)}.
$$

1. 熱力学極限で $F(T,N,V)=-kNT\ln(V/N)-kN g(T)$ の形になることを示せ。ガウス積分と $N!\sim N^Ne^{-N}$ を用いてよい。
2. 一般の理想気体でもこの形が成り立つとして、$dF=-S\,dT+\mu\,dN-p\,dV$ を用い状態方程式を導け。
3. 定積熱容量 $C_V$ と定圧熱容量 $C_p$ を $N,T,g(T)$ およびその導関数で表せ。

#### 题目描述

质量 $m$ 的相同单原子分子组成经典理想气体，粒子数 $N$、体积 $V$、温度 $T$，玻尔兹曼常数为 $k$。哈密顿量为各粒子动能之和，配分函数含 $1/N!$ 和相空间元 $(2\pi\hbar)^{-3}d^3x\,d^3p$。

1. 从相空间积分和 Stirling 近似证明自由能可写成 $F=-kNT\ln(V/N)-kNg(T)$。
2. 以该形式推导一般理想气体的状态方程。
3. 用 $N,T,g(T)$ 及其导数表示定容、定压热容量。

## **Kai**

### (1)

熱的ド・ブロイ波長を $\Lambda=\sqrt{2\pi\hbar^2/(mkT)}$ とおく。一粒子の位置積分は $V$、運動量積分は $(2\pi mkT)^{3/2}$ なので

$$
Z=\frac1{N!}\left(\frac V{\Lambda^3}\right)^N,\qquad
F=-NkT\left[\ln\frac{V}{N\Lambda^3}+1\right]+o(N).
$$

よって題意の形で

$$
\boxed{g(T)=T\left[1+\frac32\ln\frac{mkT}{2\pi\hbar^2}\right]}
$$

と書ける（対数の無次元な組合せは元の $V/(N\Lambda^3)$ による）。

### (2)

$$
p=-\left(\frac{\partial F}{\partial V}\right)_{T,N}=\frac{NkT}{V},\qquad
\boxed{pV=NkT.}
$$

### (3)

$$
S=-F_T=kN\left[\ln\frac VN+g'(T)\right],\qquad
U=F+TS=kN[Tg'(T)-g(T)].
$$

したがって

$$
\boxed{C_V=kNTg''(T),\qquad C_p=C_V+Nk=kN[Tg''(T)+1].}
$$

後式は $H=U+pV=U+NkT$ から得られる。単原子理想気体では $g''(T)=3/(2T)$ なので $C_V=3Nk/2,\ C_p=5Nk/2$。

## **Reference**

- [京都大学公式問題（2021年度 II、PDF 6ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/R3-II(web%E5%85%AC%E9%96%8B%E7%94%A8).pdf)
