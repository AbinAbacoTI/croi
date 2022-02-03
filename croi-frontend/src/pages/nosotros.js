import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import ComoInvertir from '../components/home/como_invertir'
import ModeloCroi from '../components/home/modelo_croi'
import ComoFunciona from '../components/home/como_funcion'
import PorqueInvertir from '../components/home/porque_invertir'
import PorqueFinanciarseConCroi from '../components/home/porque_financiarse_con_croi'

export default function Example() {
  return (
    <div className="py-12 bg-white">
      <PorqueFinanciarseConCroi/>  
      <PorqueInvertir/>  
      <ComoFunciona/>
      <ModeloCroi />
      <ComoInvertir />  

    </div>
  )
}