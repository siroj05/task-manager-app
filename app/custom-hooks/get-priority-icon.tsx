import { ArrowBigDown, ArrowBigRight, ArrowBigUp } from "lucide-react";

export const getPriorityIconWithLabel = (priority: string): JSX.Element | null => {
    switch (priority) {
      case 'High':
        return (
        <div className="flex text-red-600 font-bold">
          <ArrowBigUp className="w-4 h-4 my-auto text-red-600" />
          High
        </div>
      )
      case 'Medium':
        return (
          <div className="flex text-yellow-500 font-bold">
            <ArrowBigRight className="w-4 h-4 my-auto text-yellow-500" />
            Medium
          </div>
      )
      case 'Low':
        return (
          <div className="flex text-green-700 font-bold">
            <ArrowBigDown className="w-4 h-4 my-auto text-green-700" />
            Low
          </div>
      )
      default:
        return null;
    }
  };

  export const PriorityIcon = (priority : string) : JSX.Element | null => {
    switch (priority) {
      case 'High':
        return (
          <ArrowBigUp className="w-4 h-4 my-auto text-red-600" />
      )
      case 'Medium':
        return (
          <ArrowBigRight className="w-4 h-4 my-auto text-yellow-500" />
      )
      case 'Low':
        return (
          <ArrowBigDown className="w-4 h-4 my-auto text-green-700" />
      )
      default:
        return null;
    }
  }