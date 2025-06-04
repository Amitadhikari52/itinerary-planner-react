import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import ActivityCard from './ActivityCard';

export default function ItineraryDay({ name, activities: initial }) {
  const [activities, setActivities] = useState(initial);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = activities.findIndex((a) => a.id === active.id);
      const newIndex = activities.findIndex((a) => a.id === over?.id);
      setActivities((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  }

  return (
    <div className="mb-8">
      <h2 className="text-black text-xl font-bold mb-4">{name}</h2>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={activities.map((a) => a.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="flex flex-col gap-4">
            {activities.map((activity, index) => (
              <SortableItem key={activity.id} activity={{ ...activity, index }} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}

function SortableItem({ activity }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: activity.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ActivityCard activity={activity} />
    </div>
  );
}
