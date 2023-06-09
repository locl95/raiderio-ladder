export interface MythicPlusScores {
    all: number
    dps: number
    haler: number
    tank: number
    spec_0: number
    spec_1: number
    spec_2: number
    spec_3: number
}

interface MythicPlusScoresBySeason {
    season: string
    scores: MythicPlusScores
}

interface Affix {
    id: number
    name: string
}

export interface MythicPlusRun {
    short_name: string
    mythic_level: number
    score: number
    affixes: Affix[]
    num_keystone_upgrades: number
}

export interface Rank {
    world: number
    region: number
    realm: number
}

interface MythicPlusRanks {
    overall: Rank
}

export interface RaiderioProfile {
    name: string
    race: string
    class: string
    active_spec_name: string
    mythic_plus_scores_by_season: MythicPlusScoresBySeason[]
    mythic_plus_best_runs: MythicPlusRun[]
    mythic_plus_alternate_runs: MythicPlusRun[]
    mythic_plus_ranks: MythicPlusRanks
}

interface Quantile {
    totalPopulationCount: number
}

interface _Cutoff {
    all: Quantile
}
interface Cutoff {
    p999: _Cutoff
}

export interface RaiderioCutoff {
    cutoffs: Cutoff
}