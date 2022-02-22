<template>
    <a-collapse v-model:activeKey="activeKey" @change="changeActivekey">
        <a-collapse-panel key="1" header="Clinical Whole Exome Sequencing">
            <p>
                <a-card hoverable style="width: 240px">
                    <template #cover>
                        <img
                            alt="example"
                            src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/intro-cliacap-638x428-2.jpg"
                        />
                    </template>
                    <a
                        target="_blank"
                        href="https://en.novogene.com/services/clinical-diagnostics/clinical-whole-exome-sequencing-clia-cap/"
                    >
                        <a-card-meta
                            title="Clinical Whole Exome Sequencing (CLIA/CAP/ISO17025)"
                        >
                        </a-card-meta>
                    </a>
                    <a-card-meta>
                        <template #description
                            >Clinical Whole Exome Sequencing
                            (CLIA/CAP/ISO17025)</template
                        >
                    </a-card-meta>
                </a-card>
            </p>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="Clinical Panels">
            <a-collapse default-active-key="43">
                <a-collapse-panel key="7" header="Genetic Testing">
                    <p>
                        <a-card hoverable style="width: 240px">
                            <template #cover>
                                <img
                                    alt="example"
                                    src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/intro-istockphoto-924365084-321x321-1.jpg"
                                />
                            </template>
                            <a
                                target="_blank"
                                href="https://en.novogene.com/services/research-services/transcriptome-sequencing/mrna-sequencing/"
                            >
                                <a-card-meta title="Genetic Testing">
                                </a-card-meta>
                            </a>
                            <a-card-meta>
                                <template #description
                                    >Genetic Testing</template
                                >
                            </a-card-meta>
                        </a-card>
                    </p>
                </a-collapse-panel>
            </a-collapse>
            <a-collapse default-active-key="44">
                <a-collapse-panel key="8" header="Oncology" class="kap">
                    <p>
                        <a-card hoverable style="width: 240px">
                            <template #cover>
                                <img
                                    alt="example"
                                    src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-1154778478-540x360-2.jpg"
                                />
                            </template>
                            <a
                                target="_blank"
                                href="https://en.novogene.com/services/clinical-diagnostics/clinical-panels/oncology/"
                            >
                                <a-card-meta title="Oncology"> </a-card-meta>
                            </a>
                            <a-card-meta>
                                <template #description>Oncology</template>
                            </a-card-meta>
                        </a-card>
                    </p>
                    <p>
                        <a-card hoverable style="width: 240px">
                            <template #cover>
                                <img
                                    alt="example"
                                    src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-520665143-638x428-1.jpg"
                                />
                            </template>
                            <a
                                target="_blank"
                                href="https://en.novogene.com/services/clinical-diagnostics/clinical-panels/oncology/novopm-2-0/"
                            >
                                <a-card-meta title="NovoPM™ 2.0"> </a-card-meta>
                            </a>
                            <a-card-meta>
                                <template #description>NovoPM™ 2.0</template>
                            </a-card-meta>
                        </a-card>
                    </p>
                    <p>
                        <a-card hoverable style="width: 240px">
                            <template #cover>
                                <img
                                    alt="example"
                                    src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/intro-istockphoto-477335408-638x428-1.jpg"
                                />
                            </template>
                            <a
                                target="_blank"
                                href="https://en.novogene.com/services/clinical-diagnostics/clinical-panels/oncology/novofocus-cr/"
                            >
                                <a-card-meta title="NovoFocus™ CR">
                                </a-card-meta>
                            </a>
                            <a-card-meta>
                                <template #description>NovoFocus™ CR</template>
                            </a-card-meta>
                        </a-card>
                    </p>
                    <p>
                        <a-card hoverable style="width: 240px">
                            <template #cover>
                                <img
                                    alt="example"
                                    src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-520665143-348x273-1.jpg"
                                />
                            </template>
                            <a
                                target="_blank"
                                href="https://en.novogene.com/services/clinical-diagnostics/clinical-panels/oncology/cancer-immunotherapy-biomarkers/"
                            >
                                <a-card-meta
                                    title="Cancer Immunotherapy Biomarkers"
                                >
                                </a-card-meta>
                            </a>
                            <a-card-meta>
                                <template #description
                                    >Cancer Immunotherapy Biomarkers</template
                                >
                            </a-card-meta>
                        </a-card>
                    </p>
                    <p>
                        <a-card hoverable style="width: 240px">
                            <template #cover>
                                <img
                                    alt="example"
                                    src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-1183894394-540x360-2.jpg"
                                />
                            </template>
                            <a
                                target="_blank"
                                href="https://en.novogene.com/services/clinical-diagnostics/clinical-panels/oncology/featured-patients-case-study/"
                            >
                                <a-card-meta title="Patient’s Case Study">
                                </a-card-meta>
                            </a>
                            <a-card-meta>
                                <template #description
                                    >Patient’s Case Study</template
                                >
                            </a-card-meta>
                        </a-card>
                    </p>
                </a-collapse-panel>
            </a-collapse>
        </a-collapse-panel>
    </a-collapse>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup() {
        const activeKey = ref([])

        const changeActivekey = (key) => {
            console.log(key)
        }

        return {
            activeKey,
            changeActivekey,
        }
    },
})
</script>
<style>
.kap p {
    float: left;
    margin-left: 20px;
}
</style>