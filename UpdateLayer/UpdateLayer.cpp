﻿#include <map>
#include "UpdateLayer.hpp"

namespace sstd {

	extern void loadUpdateLayer() { UpdateLayer::load(); }

	UpdateLayer::UpdateLayer() {
	}

	void UpdateLayer::load(){
		arx_add_main_command<UpdateLayer>();
	}

	namespace {
#define simple_code_args const std::wstring_view & argNM , AcDbLayerTable * argLT , AcDbLayerTableRecord * argLTR
		using ApplyLayerType = void(*)(simple_code_args);

		inline std::map<std::wstring_view, ApplyLayerType> _p_createFunctions() {
			std::map<std::wstring_view, ApplyLayerType> varAns;
			/********************************************************/
			varAns.emplace(LR"(0)"sv, [](simple_code_args) {
				sstd::ArxClosePointer<AcDbLayerTableRecord> varLocalLTR;
				if (argLTR==nullptr) {
					varLocalLTR = new AcDbLayerTableRecord;
					argLTR = varLocalLTR;
					argLTR->setName( argNM.data() );
					argLT->add( argLTR );
				}

				AcCmColor varLColor;
				AcDb::LineWeight varLWeight;
				AcCmTransparency varLTP;

				argLTR->setIsOff(false)/*打开/关闭*/;
				argLTR->setIsFrozen(false)/*冻结*/;
				argLTR->setIsLocked(false)/*锁定*/;
				argLTR->setColor(varLColor)/*颜色*/;
				/*设置线型*/;
				argLTR->setLineWeight(varLWeight)/*线宽*/;
				argLTR->setTransparency(varLTP)/*透明度*/;
				argLTR->setIsPlottable(true)/*打印*/;
				argLTR->setDescription(LR"(图层：0)")/*注释*/;

			});
			/********************************************************/
			return std::move(varAns);
		}

		inline void _p_update_layer( AcDbDatabase * argDB ) {
			if (nullptr == argDB) { return; }
			
		}
	}/*namespace*/

	void UpdateLayer::main(){

	}

}/*namespace sstd*/