---
sidebar_label: '2025年8月実施 化学 第3問'
tags:
  - Tokyo-University
  - Chemistry.Organic-Chemistry.Robinson-Annulation
  - Chemistry.Organic-Chemistry.Stork-Enamine-Alkylation
  - Chemistry.Organic-Chemistry.Diels-Alder-and-Amino-Claisen-Rearrangements
  - Chemistry.Organic-Chemistry.Cyclohexane-Trans-Diaxial-E2-Elimination
  - Chemistry.Organic-Chemistry.Friedel-Crafts-Acylation-to-Alkylbenzene
  - Chemistry.Organic-Chemistry.Arene-Oxide-NIH-Shift
---

# 東京大学 工学系研究科 2025年8月実施 化学 第3問

## **Author**

GPT-5.6 Sol

## **Description**

有機化学に関する次の I から III に答えよ。

### I

次の反応における主生成物 A から K の構造式を示せ。

1. 図示された N-ベンジル置換ピリドンのヒドロキシメチル基を PCC で酸化する。
2. イソプロピリデンシクロヘキサンを $\mathrm{O_3}$、続いて $\mathrm{Zn/H_3O^+}$ で処理し、B と C を得る。
3. 2-メチルシクロヘキサン-1,3-ジオンと $\mathrm{CH_2{=}CHCOCH_2CH_3}$ を塩基存在下で加熱し、D を得る。
4. 1-テトラロンとピロリジンを加熱して E とし、続いて $\mathrm{CH_3I}$、加熱、酸加水分解により F を得る。
5. 2,3-ジメチル-1,3-ブタジエンとアクロレインを加熱して G を得る。
6. 4-オクチンを $\mathrm{Na/NH_3(l)}$ で還元して H を得る。
7. 2-ヘキセナールに $\mathrm{C_2H_5MgBr}$ を作用させ、酸処理して I を得る。
8. ベンゾニトリルを $\mathrm{LiAlD_4}$ で還元し、水で処理して J を得る。
9. 4-ブロモ-N-アリルアニリンを $\mathrm{BF_3\mathord{\cdot}O(C_2H_5)_2}$ 存在下で加熱して K を得る。

### II

cis-2-メチルシクロヘキサン-1-オール L を $\mathrm{TsCl/py}$ で cis-1-トシラート M とし、$\mathrm{KOtBu}$ で処理すると N が主生成物、3-メチルシクロヘキサ-1-エン O が副生成物となる。

1. N の構造を示し、N が優先する理由を反応機構から説明せよ。
2. L から O を主生成物として得る多段階反応経路を一つ示せ。

### III

1. ビフェニル P を $\mathrm{HNO_3/H_2SO_4}$ でニトロ化した。生成物 Q の $^1\mathrm{H}$ NMR では、$\delta=7.77$、$8.26\ \mathrm{ppm}$ に同じカップリング定数をもつ二つのダブレットが観測された。Q の構造を示せ。
2. ベンゼンから n-プロピルベンゼン R を主生成物として合成する多段階経路を一つ示せ。
3. フェニルアラニン S の芳香環上の D を保持したまま、アレーンオキシド T を経て重水素化チロシン U が生じる。T から U への電子の流れを示せ。

## **Kai**

構造式は、smiles-drawer で描画できる fenced smiles block で示す。以下の SMILES は結合様式、分子式、および必要な立体・同位体情報を含む。

### I

#### I.1 A

PCC は第一級アルコールをアルデヒドまで酸化し、ピリドン環、環上のメチル基、および N-ベンジル基は変化しない。したがって A は出発物質の $-\ce{CH2OH}$ を $-\ce{CHO}$ に置き換えた構造である。

```smiles
O=C1C(C)=C(C=O)C=CN1Cc2ccccc2
```

#### I.2 B、C

オゾン分解では C=C の両炭素がそれぞれカルボニル炭素になる。環側からシクロヘキサノン B、二つのメチル基をもつ環外炭素からアセトン C が生じる。

B（シクロヘキサノン）:

```smiles
O=C1CCCCC1
```

C（アセトン）:

```smiles
CC(=O)C
```

#### I.3 D

まず 2-メチルシクロヘキサン-1,3-ジオンの活性メチレンから生じたエノラートが、エチルビニルケトンの $\beta$ 炭素へ Michael 付加する。続く分子内アルドール付加と脱水により、Robinson 環化生成物 D を得る。

```smiles
CC12C(=O)CCCC1=C(C)C(=O)CC2
```

分子式の収支も

$$
\ce{C7H10O2 + C5H8O -> C12H16O2 + H2O}
$$

となり、D の分子式 $\ce{C12H16O2}$ と一致する。

#### I.4 E、F

1-テトラロンとピロリジンの脱水縮合でエナミン E が生じる。

```smiles
N1(CCCC1)C2=CCCc3ccccc32
```

E の求核的なエナミン炭素が $\ce{CH3I}$ に $S_\mathrm{N}2$ 攻撃し、酸加水分解でカルボニル基が再生する。これは Stork エナミンアルキル化であり、F は 2-メチル-1-テトラロンである。

```smiles
O=C1C(C)CCc2ccccc21
```

#### I.5 G

2,3-ジメチル-1,3-ブタジエンとアクロレインの Diels-Alder 反応により、G（3,4-ジメチルシクロヘキサ-3-エン-1-カルバルデヒド）が生じる。

```smiles
O=CC1CC(C)=C(C)CC1
```

#### I.6 H

$\ce{Na/NH3(l)}$ によるアルキンの溶解金属還元では、二つの H が反対側から付加する。したがって H は $(E)$-4-オクテンである。

```smiles
CCC/C=C/CCC
```

#### I.7 I

$\ce{C2H5MgBr}$ は 2-ヘキセナールのカルボニル炭素へ 1,2-付加し、酸処理後に二級アリルアルコール I を与える。元の C=C は保持される。

```smiles
CCC/C=C/C(O)CC
```

#### I.8 J

$\ce{LiAlD4}$ から供給される $\ce{D^-}$ がニトリル炭素へ二回付加し、後処理の水から N-H の H が導入される。したがって J は $\ce{C6H5CD2NH2}$ である。

```smiles
[2H]C([2H])(N)c1ccccc1
```

#### I.9 K

Lewis 酸存在下の加熱で amino-Claisen 転位が起こり、アリル基が N から空いているオルト位へ移る。K は 2-アリル-4-ブロモアニリンである。

```smiles
Nc1c(CC=C)cc(Br)cc1
```

### II

#### II.1

N は 1-メチルシクロヘキサ-1-エンである。

```smiles
CC1=CCCCC1
```

シクロヘキサン上の E2 反応では、脱離基と $\beta$-H が trans-diaxial、すなわち反平面になる必要がある。M の反応配座では OTs が軸位になり、隣接するメチル置換炭素上にも OTs と反平面の軸位 H が存在する。この H を引き抜けば、置換度の高い C1=C2 二重結合をもつ N が生じる。

反対側の $\beta$-H を引き抜くと副生成物 O（3-メチルシクロヘキサ-1-エン）になる。

```smiles
C1=CC(C)CCC1
```

両経路とも trans-diaxial 条件を満たすが、N の二重結合の方が置換度が高く安定なので、

$$
\boxed{N\ \text{が主生成物}}
$$

となる。

#### II.2

L の OH の立体配置だけを反転させて trans-2-メチルシクロヘキサン-1-オールとし、その後に脱離させればよい。一例は Mitsunobu 反応を用いる経路である。

$$
\begin{aligned}
L
&\xrightarrow[\ce{PhCO2H}]{\ce{PPh3},\,\mathrm{DEAD}}
\text{trans-安息香酸エステル}
\\
&\xrightarrow{\ce{NaOH},\,\ce{H2O}}
\text{trans-2-メチルシクロヘキサン-1-オール}
\\
&\xrightarrow{\mathrm{TsCl},\,\mathrm{py}}
\text{trans-1-トシラート}
\\
&\xrightarrow[\Delta]{\ce{KOC(CH3)3}}
\boxed{O}.
\end{aligned}
$$

trans-1,2-置換体を E2 反応可能な配座にすると OTs とメチル基がともに軸位となる。メチル置換炭素には反平面の軸位 H が存在しないため、反対側の炭素上の H だけが脱離し、C1=C6 二重結合をもつ O が選択的に生じる。

### III

#### III.1

Q は 4-ニトロビフェニルである。

```smiles
[O-][N+](=O)c1ccc(-c2ccccc2)cc1
```

ビフェニル基はオルト・パラ配向性を示し、立体障害の小さいパラ置換体が主となる。ニトロ基をもつ環はパラ二置換環なので、その 4 個の H は二組の等価な H に分かれ、同じオルトカップリング定数をもつ二つのダブレットを与える。$\delta=8.26\ \mathrm{ppm}$ 側はニトロ基に近い H に対応する。

#### III.2

プロピルハライドを直接 Friedel-Crafts アルキル化すると、一次プロピルカチオンが二次カチオンへ転位してイソプロピルベンゼンを生じやすい。そこで、まず転位しないアシリウムイオンでアシル化し、そのカルボニル基を還元する。

$$
\ce{C6H6 ->[CH3CH2COCl, AlCl3] C6H5COCH2CH3}
$$

$$
\ce{C6H5COCH2CH3 ->[NH2NH2, KOH, \Delta] C6H5CH2CH2CH3}
$$

第 2 段階は Wolff-Kishner 還元である。生成物 R は n-プロピルベンゼンである。

```smiles
CCCc1ccccc1
```

代わりに $\ce{Zn(Hg)/HCl}$ による Clemmensen 還元を用いてもよい。

#### III.3

出発物質 S では、D は側鎖に対してパラ位にある。

```smiles
N[C@@H](Cc1ccc([2H])cc1)C(=O)O
```

酸化により、D をもつ炭素とその隣の炭素の間にアレーンオキシド T が生じる。

```smiles
C1=CC(C[C@@H](N)C(=O)O)=CC2C1([2H])O2
```

T のエポキシドを構成する二つの炭素について、もともと D をもつ炭素を C1、その隣を C2 とする。

1. エポキシド O の孤立電子対が $\ce{H+}$ を受け取り、プロトン化エポキシドになる。
2. C2-O 結合の電子対が O へ移動して開環し、O は C1 上に OH として残り、C2 にカチオン性をもつ $\sigma$ 錯体が生じる。
3. C1-D 結合の電子対が C2 のカチオン中心へ移動し、D が C1 から C2 へ 1,2-転位する。
4. 芳香環内の電子移動と脱プロトン化によって芳香族性が回復する。

この結果、酸素は元の D の位置でフェノール性 OH となり、D は隣接炭素へ移った重水素化チロシン U が生じる。

```smiles
N[C@@H](Cc1ccc(O)c([2H])c1)C(=O)O
```

$$
\boxed{
T
\ \xrightarrow[\text{1,2-D shift}]{\ce{H+}}
U
}
$$

この同位体保持を伴う転位が NIH shift である。

## **Reference**

- [東京大学大学院工学系研究科 2026年度大学院入学試験問題 化学](https://www.t.u-tokyo.ac.jp/hubfs/admission/2026/C_J_E_2026.pdf)
