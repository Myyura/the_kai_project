---
sidebar_label: "2018年度 専門部門 問題1（熱力学）"
tags:
  - Nagoya-University
  - Physics.Thermodynamics.Van-der-Waals-Gas
  - Physics.Thermodynamics.Maxwell-Relations
---

# 名古屋大学 工学研究科 機械航空系 2018年度 専門部門 問題1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

1 mol の気体がファンデルワールスの状態方程式

$$
\left(p+\frac{a}{v^2}\right)(v-b)=RT
$$

に従う。$p,v,T$ は圧力・モル体積・絶対温度、$R$ は気体定数、$a,b$ は正の定数で、$v>b$ とする。モル内部エネルギーを $u$、モルエントロピーを $s$ とする。

### (1)

関係式 $(\partial u/\partial v)_T=T(\partial p/\partial T)_v-p$ の導出における空欄を埋めよ。

$$
ds=(\text{ア})\,dT+(\text{イ})\,dv,
$$

$$
du=(\text{ウ})\,ds+(\text{エ})\,dv
=(\text{オ})\,dT+(\text{カ})\,dv,\qquad
\left(\frac{\partial u}{\partial v}\right)_T=(\text{キ}).
$$

ここでマクスウェルの関係 $(\text{ク})=(\text{ケ})$ を用いる。

### (2)–(4)

2. 内部エネルギー $u$ の体積依存性を求めよ。
3. 定容モル比熱 $c_v$ の体積依存性を調べよ。
4. 温度 $T$ 一定で $v_1$ から $v_2$（$b<v_2<v_1$）まで準静的に圧縮する。気体に加えた仕事、エントロピー変化、内部エネルギー変化を求めよ。

#### 题目描述

1 mol 气体满足 $(p+a/v^2)(v-b)=RT$，$a,b>0$ 且 $v>b$。$u,s$ 为摩尔内能和熵。（1）补全上列微分关系中的九个空，以证明 $(\partial u/\partial v)_T=T(\partial p/\partial T)_v-p$。（2）求内能的体积依赖关系。（3）讨论定容摩尔热容 $c_v$ 是否随体积变化。（4）在温度 $T$ 下从 $v_1$ 准静态压缩至 $b<v_2<v_1$，求外界对气体做的功、熵变及内能变化。

## **Kai**

### (1)

基本関係 $du=Tds-pdv$ と、$s=s(T,v)$ の全微分から

| 空欄 | 内容 |
| --- | --- |
| ア | $(\partial s/\partial T)_v$ |
| イ | $(\partial s/\partial v)_T$ |
| ウ | $T$ |
| エ | $-p$ |
| オ | $T(\partial s/\partial T)_v$ |
| カ、キ | $T(\partial s/\partial v)_T-p$ |
| ク | $(\partial s/\partial v)_T$ |
| ケ | $(\partial p/\partial T)_v$ |

最後の関係は $f=u-Ts$ の微分 $df=-s\,dT-p\,dv$ の混合偏微分の対称性から従う。

### (2)

$$
p=\frac{RT}{v-b}-\frac{a}{v^2},\qquad
T\left(\frac{\partial p}{\partial T}\right)_v-p=\frac{a}{v^2}.
$$

従って、温度だけの関数を $\varphi$ として

$$
\boxed{u(T,v)=\varphi(T)-\frac{a}{v}}.
$$

### (3)

$$
c_v=\left(\frac{\partial u}{\partial T}\right)_v=\varphi'(T),\qquad
\boxed{\left(\frac{\partial c_v}{\partial v}\right)_T=0}.
$$

体積には依存しないが、温度一定とは限らない。

### (4)

外部から気体に加える仕事を正に取ると

$$
\boxed{W_{\rm on}=-\int_{v_1}^{v_2}p\,dv
=RT\log\frac{v_1-b}{v_2-b}-a\left(\frac1{v_2}-\frac1{v_1}\right)}.
$$

等温過程では $ds=(\partial p/\partial T)_v\,dv$ なので

$$
\boxed{\Delta s=R\log\frac{v_2-b}{v_1-b}},\qquad
\boxed{\Delta u=a\left(\frac1{v_1}-\frac1{v_2}\right)}.
$$

$Q=T\Delta s$ とすると $\Delta u=Q+W_{\rm on}$ が成り立つ。

## **Reference**

- [名古屋大学公式問題：2017年8月23日実施・専門部門、PDF 2ページ](https://www.mae.nagoya-u.ac.jp/application/files/1515/2475/5975/H29_.pdf)
